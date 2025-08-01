from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=100)
    rollno = models.IntegerField()
    slug = models.SlugField(unique=True, max_length=100, blank=True)
   # photo = models.ImageField(upload_to='photos/', blank=True, null=True)

    def __str__(self):
      return f"{self.name} -  {self.rollno}"
