import glob
import re

files = glob.glob('*.html')
print(f"Total HTML files: {len(files)}")

footer_types = {}
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    
    has_unified = 'linear-gradient(180deg, #0e131f 0%, #080b12 100%)' in c
    has_services = 'services.html' in c and '<footer' in c and c.find('services.html') > c.find('<footer')
    has_machines = 'machines.html' in c and '<footer' in c and c.find('machines.html') > c.find('<footer')
    has_old_footer = 'class="modern-footer"' in c

    footer_types[f] = {
        'unified': has_unified,
        'old': has_old_footer,
        'has_services': has_services,
        'has_machines': has_machines
    }

old_footers = [f for f, v in footer_types.items() if v['old'] or not v['unified']]
missing_links = [f for f, v in footer_types.items() if not v['has_services'] or not v['has_machines']]

print(f"Files with old/non-unified footer ({len(old_footers)}):", old_footers)
print(f"Files missing services or machines in footer ({len(missing_links)}):", missing_links)
