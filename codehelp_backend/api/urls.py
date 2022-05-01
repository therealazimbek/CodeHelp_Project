from django.urls import path
from rest_framework_simplejwt.views import token_obtain_pair

from .views import *

urlpatterns = [
    path('login/', token_obtain_pair),
    path('users/', UserView.as_view()),
    path('users/<int:pk>/', UserDetailView.as_view()),
    path('users/<int:pk>/change_password/', ChangePasswordView.as_view()),

    path('questions/', QuestionListView.as_view()),
    path('questions/<int:pk>/', question_detail),
    path('questions/<int:pk>/messages/', question_messages),


    path('tags/', tag_list)
]
