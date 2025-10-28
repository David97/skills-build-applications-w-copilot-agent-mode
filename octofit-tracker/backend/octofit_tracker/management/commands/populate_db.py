from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard
from datetime import date

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Delete existing data
        Activity.objects.all().delete()
        User.objects.all().delete()
        Team.objects.all().delete()
        Workout.objects.all().delete()
        Leaderboard.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel', universe='Marvel')
        dc = Team.objects.create(name='DC', universe='DC')

        # Create users
        spiderman = User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel)
        ironman = User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel)
        batman = User.objects.create(name='Batman', email='batman@dc.com', team=dc)
        wonderwoman = User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team=dc)

        # Create activities
        Activity.objects.create(user=spiderman, type='Running', duration=30, calories=300, date=date.today())
        Activity.objects.create(user=ironman, type='Cycling', duration=45, calories=500, date=date.today())
        Activity.objects.create(user=batman, type='Martial Arts', duration=60, calories=700, date=date.today())
        Activity.objects.create(user=wonderwoman, type='Swimming', duration=40, calories=400, date=date.today())

        # Create workouts
        Workout.objects.create(name='Hero Training', description='Intense superhero workout', difficulty='Hard')
        Workout.objects.create(name='Quick Cardio', description='Fast-paced cardio session', difficulty='Medium')

        # Create leaderboard
        Leaderboard.objects.create(team=marvel, points=1500, rank=1)
        Leaderboard.objects.create(team=dc, points=1400, rank=2)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data!'))
