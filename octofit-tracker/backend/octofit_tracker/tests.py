from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class ModelTests(TestCase):
    def setUp(self):
        marvel = Team.objects.create(name='Marvel', universe='Marvel')
        dc = Team.objects.create(name='DC', universe='DC')
        self.user1 = User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel)
        self.user2 = User.objects.create(name='Batman', email='batman@dc.com', team=dc)
        Workout.objects.create(name='Hero Training', description='Intense superhero workout', difficulty='Hard')
        Leaderboard.objects.create(team=marvel, points=1000, rank=1)
        Leaderboard.objects.create(team=dc, points=900, rank=2)
    def test_user_team(self):
        self.assertEqual(self.user1.team.name, 'Marvel')
        self.assertEqual(self.user2.team.name, 'DC')
    def test_leaderboard(self):
        marvel_leader = Leaderboard.objects.get(team__name='Marvel')
        self.assertEqual(marvel_leader.rank, 1)
