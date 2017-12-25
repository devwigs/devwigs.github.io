# Copyright 2017 D.G. MacCarthy <http://dmaccarthy.github.io>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
# 
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
# 
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

"A demonstration of some of sc8pr 2.0's GUI controls"

from sc8pr import Sketch, Canvas, Image, TOPLEFT, TOPRIGHT, CENTER, TOP
from sc8pr.util import rgba, nothing, sc8prData
from sc8pr.text import BOLD, Font
from sc8pr.gui.textinput import TextInput
from sc8pr.gui.radio import Radio, Options
from sc8pr.gui.slider import Slider
from sc8pr.gui.button import Button, yesNo
from sc8pr.gui.menu import Menu, R_TRIANGLE

GREY, BLUE = rgba("#ececec", "blue")
FONT = Font.sans()

def buttons(cfg):
    "Create a canvas containing two buttons"
    cv = Canvas((256, 48))

    # Selectable button
    btn1 = Button((120, 48)).textIcon("Selectable\nButton", yesNo()[0])
    cv["Selectable"] = btn1.config(anchor=TOPLEFT).bind(onaction=buttonClick)

    # Non-selectable button
    btn2 = Button(btn1.size, 2).textIcon("Popup Menu").bind(onaction=buttonClick)
    cv["Popup"] = btn2.config(pos=(255, 0), anchor=TOPRIGHT)

    # Configure button text
    btn1[-1].config(color=BLUE, align=CENTER, **cfg)
    btn2[-1].config(**cfg)
    return cv

def buttonClick(gr, ev):
    "Event handler for buttons"
    path = ev.target.path # [..., button, button box, dialog, sketch]
    btn, dlg = path[-4], path[-2]
    print(btn, btn.selected)
    if btn.name == "Popup":
        btn.status = "normal"
        dlg += dlg.cover.config(size=dlg.size)
        dlg += dlg.menu

def setup(sk):
    # Create a Canvas as a GUI dialog
    cv = Canvas((384,256)).config(bg="#f0f0ff", weight=1)

    # Vertical positioning 12 pixels below last item added
    down = lambda cv: 16 + cv[-1].height

    # Add a TextInput
    x, y = cv.center[0], 16
    cv["Input"] = TextInput("", "Type Some Text...").config(anchor=TOP,
        font=FONT, fontStyle=BOLD, pos=(x,y), color=BLUE,
        bg="#d8d8d8", padding=4).bind(onaction)

    # Add a Radio box
    y += down(cv)
    cfg = {"font":FONT, "fontSize":14}
    text = "Option A", "Option B", "Option C"
    radio = Radio(text, **cfg).bind(onchange=radioChange)
    cv["ABC"] = radio.config(pos=(x,y), anchor=TOP, selected=1)

    # Add an Options box
    y += down(cv)
    text = "Option X", "Option Y", "Option Z"
    radio = Options(text, **cfg).config(pos=(x,y), anchor=TOP)
    cv["XYZ"] = radio.bind(onaction=optionsChange)

    # Add Buttons
    y += down(cv)
    cv["Button Box"] = buttons(cfg).config(anchor=TOP, pos=(x,y))

    # Modify canvas and sketch size based on content
    cv.resize((cv.width, y + down(cv)), False)
    w, h = cv.size
    sk.size = w + 48, h + 48

    # Add a Slider
    slider = Slider((16, cv.height), BLUE, 100, 0, 100)
    slider.config(pos=(cv.width, 0), anchor=TOPRIGHT, bg=GREY, weight=1)
    cv += slider.bind(onchange=sliderChange)

    # Create a popup menu
    img = Image.fromBytes(sc8prData("alien"))
    items = [("Action", img, None), ("Back", None, R_TRIANGLE)]
    cv.menu = Menu(items, txtConfig=cfg).config(pos=cv.center)
    cv.menu.bind(resize=nothing, onaction=menuAction)

    # Create a cover to block other controls when popup running
    cv.cover = Image(bg="#ffffffc0").config(anchor=TOPLEFT)

    # Add the dialog to the sketch
    sk["Dialog"] = cv.bind(resize=nothing).config(pos=sk.center)


def onaction(gr, ev):
    "Event handler for TextInput"
    print(gr, gr.data)

def radioChange(gr, ev):
    "Event handler for Radio"
    print(gr, gr.selected.layer)

def menuAction(menu, ev):
    "Event handler for Menu"
    n = menu.buttonNumber(ev.target)
    print(menu, n)
    if n == 1: # Item 1 = Back
        for btn in menu: btn.status = "normal"
        cv = menu.canvas
        cv.cover.remove()
        menu.remove()

def optionsChange(gr, ev):
    "Event handler for Options"
    target = ev.target
    print(gr, target.layer, target.selected)

def sliderChange(gr, ev):
    "Event handler for Slider"
    m = ["Click", "Scroll", "Drag", "Key"][ev.method]
    print(gr, round(gr.value), m)

def onclick(sk, ev):
    print("Unhandled click:", ev.target)


# Play the sketch
Sketch().bind(onclick).play("GUI Demo")