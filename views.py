from django.shortcuts import render 
from.models import Student

from django.contrib.auth.forms import UserCreationForm
# Create your views here.
def contact(request):
    s = Student.objects.all()
    return render(request, 'contact.html', {'Student_list': s})

def details(request, slug):
    s = Student.objects.get(slug=slug)
    return render(request, 'details.html', {'Student': Student})
 
def register(request,redirect):
   if request.method == 'POST':
       form = UserCreationForm(request.POST)
       if form.is_valid():
           form.save()
           return redirect('contact')
   else:
       form = UserCreationForm()
   return render(request, 'register.html', {'form': form})

def login(request):
    if request.method == 'POST': 
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            auth_login(request, user)
            return redirect("contact")
    else:
       form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})
def logout(request):
    if request.method == 'POST':
        logout(request)
        return redirect("contact")
    return render(request, 'logout.html')