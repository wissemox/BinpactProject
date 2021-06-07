
from .models import User
from datetime import date


def end_ban_job():
    # your functionality goes here
    now = date.today()
    banned_users = User.objects.filter(end_time_ban__lt = now, is_banned = True)
    banned_users.update(is_banned = False)  




    