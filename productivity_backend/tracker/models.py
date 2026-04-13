from django.db import models

class WebsiteTime(models.Model):
    website = models.URLField()
    time_spent = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.website