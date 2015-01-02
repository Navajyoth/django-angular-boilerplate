from django.test import TestCase, Client
from .models import User


class LoginTestCase(TestCase):

  def setUp(self):
    User.objects.create_user(email="arun@gmail.com", password="abcd1234", name="Arun")

  def test_login_success(self):
    response = self.client.post("/api/login/", {"email": "arun@gmail.com", "password": "abcd1234"})
    print response.header
    self.assertEqual(response.status_code, 200)

  def test_login_failure(self):
    """
    Testing login failure with correct email and password
    """
    response = self.client.post("/api/login/", {"email": "arun@gmail.com", "password": "abcd134"})
    self.assertEqual(response.status_code, 401)




