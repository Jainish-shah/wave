# Grid
# No description available.
# ---
import random

from faker import Faker

from telesync import Site, ui, pack, data

fake = Faker()

site = Site()
page = site['/demo']

c = page.add('example', ui.grid_card(
    box='1 1 3 4',
    title='Currency Trades',
    cells=pack([
        dict(title='Currency', value='=currency'),
        dict(title='Trades',
             view='list_item1',
             props=dict(title='=code', caption='1 hour ago', value='=trades', aux_value='=returns')),
    ]),
    data=data('currency code trades returns', -15),
))
c.data = [
    [fake.cryptocurrency_name(), fake.cryptocurrency_code(), random.randint(100, 1000), random.randint(10, 100)] for
    _ in range(15)]

page.sync()
