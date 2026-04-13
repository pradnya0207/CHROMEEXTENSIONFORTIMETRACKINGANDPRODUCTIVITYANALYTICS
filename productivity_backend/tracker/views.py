from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

def home(request):
    return HttpResponse("Backend is running")

@csrf_exempt
def track_time(request):

    if request.method == "POST":

        data = json.loads(request.body)

        website = data.get("website")
        time_spent = data.get("time_spent")

        print("Website:", website)
        print("Time Spent:", time_spent)

        return JsonResponse({
            "status": "success",
            "website": website,
            "time_spent": time_spent
        })

    return JsonResponse({"error": "POST request required"})