# Plot / Histogram
# No description available.
# ---
from synth import FakeCategoricalSeries
from telesync import Site, data, ui

site = Site()

page = site['/demo']

n = 10
f = FakeCategoricalSeries()
v = page.add('example', ui.plot_card(
    box='1 1 4 5',
    title='Histogram',
    data=data('lo hi price', n),
    vis=ui.vis([ui.mark(mark='interval', y='=price', x1='=lo', x2='=hi', y_min=0)])
))
v.data = [(i * 10, i * 10 + 10, x) for i, (c, x, dx) in enumerate([f.next() for _ in range(n)])]

page.sync()
