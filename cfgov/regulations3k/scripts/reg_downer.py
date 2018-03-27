from __future__ import unicode_literals
import sys

from bs4 import BeautifulSoup as bs
import requests

from regulations3k.models.django import Section
try:
    from hashlib import sha3_224
except ImportError:
    from sha3 import sha3_224

test_subsection = '1002-4'
test_url = ('https://www.consumerfinance.gov/eregulations/'
            '1002-4/2013-22752_20140118#{}'.format(test_subsection))

# section character: u'\xa7\xa0'


def reg_to_regdown(subsection, url):
    soup = bs(requests.get(url).text, 'lxml')
    for span_class in ['stripped-marker', 'expand-text']:
        for span_tag in soup.find_all('span', {'class': span_class}):
            span_tag.replace_with('')
    for section in soup.find_all(
            'section', {'class': "inline-interpretation"}):
        if section.has_attr('data-interp-id'):
            sec_text = section.text.strip()
            section.replace_with(
                "\n\n{" + section['data-interp-id'] + "}  \n" + sec_text)
    main_section = soup.find('section', {'id': subsection})
    hed = main_section.find('h2').text.strip()
    lines = main_section.find_all('li')
    lines = [line for line in lines if line.text.strip()]
    top_id = "\n\n{" + subsection + "}   \n"
    regdown_lines = [top_id, lines[0].text.strip()]
    for line in lines[1:]:
        if line.has_attr('id'):
            regdown_lines.append(
                "\n\n{" + line['id'] + "}  \n" + line.text.strip()
            )
        else:
            line_id = sha3_224(line.text.strip().encode('utf-8')).hexdigest()
            regdown_lines.append("\n{" + line_id + "}  \n" + line.text.strip())
    regdown = "".join(regdown_lines)
    section, cr = Section.objects.get_or_create(label=subsection)
    section.title = hed
    section.contents = regdown
    section.save()
    if cr:
        print("Created regdown for subsection {}".format(subsection))
    else:
        print("Updated regdown for subsection {}".format(subsection))
    with open('/Users/higginsw/Desktop/regdown1.md', 'w') as f:
        f.writelines(
            ['# '.encode('utf8') + hed.encode('utf8') + '  \n'.encode('utf8')])
        f.write(regdown.encode('utf8'))


def run(*args):
    if len(args) != 2:
        print(
            "Usage: ./cfgov/manage.py runscript regdowner [SUBSECTION] [URL]")
        sys.exit(1)
    else:
        reg_to_regdown(args[0], args[1])
