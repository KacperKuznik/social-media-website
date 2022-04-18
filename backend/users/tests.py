from django.test import TestCase
from .models import FriendRequest, User
# Create your tests here.

def create_test_user(username='username'):
    return User.objects.create(username=username, password='password', email='email')



class UserModelTest(TestCase):

    def test_toggle_friend_request(self):
        #create and delete friend request from same person
        user1 = create_test_user()
        user2 = create_test_user('user2')
        friend_request = user1.toggle_friend_request(user2)
        self.assertIs(len(FriendRequest.objects.all()), 1)
        friend_request = user1.toggle_friend_request(user2)
        self.assertIs(len(FriendRequest.objects.all()), 0)
        
    
    def test_toggle_friend_request_from_two_users(self):
        #don't allow to create request if different user has already requested
        user1 = create_test_user()
        user2 = create_test_user('user2')
        friend_request = user1.toggle_friend_request(user2)
        friend_request = user2.toggle_friend_request(user1)
        self.assertIs(friend_request, False)

    def test_accept_friend_request(self):
        user1 = create_test_user()
        user2 = create_test_user('user2')
        friend_request = user2.toggle_friend_request(user1)
        
        self.assertIs(len(user1.friends.all()), 0)
        accept = user1.accept_friend_request(user2)
        self.assertIs(accept, True)
        self.assertIs(user1.friends.all().contains(user2), True)
        self.assertIs(user2.friends.all().contains(user1), True)
        accept = user1.accept_friend_request(user2)
        self.assertIs(accept, False)

    def test_remove_friend(self):
        user1 = create_test_user()
        user2 = create_test_user('user2')
        friend_request = user2.toggle_friend_request(user1)
        accept = user1.accept_friend_request(user2)
        self.assertIs(user1.friends.all().contains(user2), True)
        self.assertIs(user2.friends.all().contains(user1), True)
        user1.remove_friend(user2)
        self.assertIs(user1.friends.all().contains(user2), False)
        self.assertIs(user2.friends.all().contains(user1), False)

        

