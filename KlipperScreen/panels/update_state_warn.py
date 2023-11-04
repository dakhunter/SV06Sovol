import logging
import os
import gi
import netifaces

import subprocess
gi.require_version("Gtk", "3.0")
from gi.repository import GLib, Gtk, Pango, Gdk, GdkPixbuf

from ks_includes.screen_panel import ScreenPanel

def create_panel(*args):
    return UpdateStateWarnPanel(*args)

class UpdateStateWarnPanel(ScreenPanel):
    def __init__(self, screen, title):
        super().__init__(screen, title)
        self._screen = screen
        self.width = self._screen.width
        self.height = self._screen.height

        self.inner_fixed_width = self.height/2
        self.inner_fixed_height = self.height-self.width
        

        self.logo_width = self.logo_height = self.width / 3

        self.dialog_out()

    def dialog_out(self):
        self.fixed = Gtk.Fixed()
        self.fixed.set_size_request(self.width, self.height)
        self.image = Gtk.Image()
        home_dir = os.path.expanduser("~")

#        logopixbuf = GdkPixbuf.Pixbuf.new_from_file_at_size(home_dir + "/KlipperScreen/styles/chatou.png", self.logo_width, self.logo_width)
#        self.logo = Gtk.Image()
#        self.logo.set_from_pixbuf(logopixbuf)

        self.inner_fixed = Gtk.Fixed()
        self.inner_fixed.override_background_color(Gtk.StateType.NORMAL, Gdk.RGBA(0.8, 0.8, 0.8, 1.0))
        self.inner_fixed.set_size_request(self.inner_fixed_width, self.height-self.width)
        pixbuf = GdkPixbuf.Pixbuf.new_from_file_at_size(home_dir + "/KlipperScreen/styles/plr_back.png", self.inner_fixed_width, self.height-self.width)
        # pixbuf = GdkPixbuf.Pixbuf.new_from_file_at_size(home_dir + "/KlipperScreen/styles/plr_back.png", width, height)
        self.image.set_from_pixbuf(pixbuf)
        self.inner_fixed.add(self.image)

        
        self.text_tips = _("Firmware is updating!\nDon't power off before\nthe dialog disappears,\nor system may damage!!!")
        self.label_tips = Gtk.Label()
        self.label_tips.set_justify(Gtk.Justification.CENTER)
        self.label_tips.set_markup("<span font='DejaVu Sans 20'>{}</span>".format(self.text_tips))

        x = (self.inner_fixed_width-self.inner_fixed_height)/2        
        y = (self.height-self.width) / 4
        self.inner_fixed.put(self.label_tips, x, y)

        x = (self.width - self.height/2)/2
        y = self.width / 2
        self.fixed.put(self.inner_fixed, x, y)
#        self.fixed.put(self.logo, self.logo_width, int((y-self.logo_width)/2))

