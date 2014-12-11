from django.core.management.base import BaseCommand, CommandError
from badges.models import Badge
import random

class Command(BaseCommand):
    help = 'Deletes all existing Badges, and creates 10000 new ones for performance profiling'

    def handle(self, *args, **options):
        print "This will delete all of your existing Badges - if you really want to do that, type 'delete my badges':"

        confirmation = raw_input("Type it: ")
        how_many = raw_input("How many badges do you want? ")
        how_many = int(how_many)

        if confirmation != "delete my badges":
            raise CommandError("I'm only going to run if you're sure you want to 'delete my badges'")
        else:
            Badge.objects.all().delete()

            pin = 0
            for x in range(0, how_many):
                string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
                name = "".join([random.choice(string) for i in range(8)])
                description = "".join([random.choice(string) for i in range(20)])
                presenters = "".join([random.choice(string) for i in range(8)])
                badge_class = "".join([random.choice(string) for i in range(8)])
                badge_pin = pin
                pin = pin + 1
                print pin
                badge = Badge.objects.create(name=name, description=description, presenters=presenters, badge_class=badge_class, badge_pin=badge_pin)
