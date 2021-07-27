from django.shortcuts import render
from django.templatetags.static import static
from django.views.generic import TemplateView
from os import listdir
from os.path import isfile, join
import pathlib


class indexView(TemplateView):
    template_name = "index.html"
    context = {}

    def get_projects(self):
        self.context['project_languages'] = ['python', 'c++', "javascript"]
        self.context['project_tags'] = ["featured", "web development", "games", "machine learning", "computer graphics", "all"]
        self.context['projects'] = {
            "Ocean Simulator": {
                "photo": "img/ocean-wave.png",
                "tags": ["featured", "computer graphics", "web"],
                "description": "A sinusoidally changing triangular mesh.",
                "link": "waves",
            },
            "Sentient Slinkie": {
                "photo": "img/sentient-slinkie.png",
                "tags": ["featured", "generative animation", "web"],
                "description": "A rainbow line that draws itself.",
                "link": "slinkie",
            },
            "Object Generator": {
                "photo": "img/object-generator.png",
                "tags": ["featured", "generative animation", "web"],
                "description": "Psuedo-Real Objects generated through a random noise function and symmetry.",
                "link": "object-generator",
            },
            "MotivBot Quote Generator": {
                "photo": "img/motivbot-front.png",
                "tags": ["featured", "machine learning"] ,
                "description": "AI that generates motivational quotes on scenic backgrounds.",
                "link": "object-generator", #"motivbot",
            },
            "The Fan and The Ball": {
                "photo": "img/fans-and-ball.png",
                "tags": ["generative animation"],
                "description": "Fans generated from parametric functions look like they are trying to catch a moving ball.",
                "link": "object-generator", #"fan-and-ball",
            },
            "Gravity Wins!": {
                "photo": "img/gravity.png",
                "tags": ["generative animation"],
                "description": "A basic particle physics simulator.",
                "link": "object-generator", #"physics-simulator",
            },
            "Mr.Tumbleweed": {
                "photo": "img/tumbleweed.png",
                "tags": ["game"],
                "description": "Mr.Tumbleweed has to jump over tumbleweeds!",
                "link": "object-generator", #"tumbleweed",
            }, 
        }

    def get_carousel(self):
        s_url= "static/img/carousel/"
        carousel_files = ["sentient-slinkie.png", "ocean-wave.png", "object-generator.png"]
        carousel_redirects = ["slinkie", "object-generator", "waves"]
        carousel_files = [s_url+f for f in carousel_files]
        self.context["carousel_pics"] = carousel_files
    
    def get_context_data(self):
        self.get_carousel()
        self.get_projects()
        return self.context
    
    def get(self, request):
        return self.render_to_response(self.get_context_data())
        
index_view = indexView.as_view()


class genArtView(TemplateView):
    template_name = "object-generator.html"
    context = {}

    def get_animation_scripts(self):
        self.context['animations'] = {}
        self.context['animations']["Ocean Simulator"] = {
                "isNotScript": True, 
                "video": "video/water.mp4", 
                "video_type": "mp4"
        }
        self.context['animations']["Object Generator"] = {"script": "/static/js/object/object.js"}
        self.context['animations']["Sentient Slinkie"] = {"script": "/static/js/sentient_slinkie_js/sentient_slinkie_js.js"}

    def get_context_data(self):
        self.get_animation_scripts()
        return self.context

    def get(self, request):
        return self.render_to_response(self.get_context_data())

gen_art = genArtView.as_view()

class wavesView(TemplateView):
    template_name="waves.html"

waves = wavesView.as_view()

class objectGeneratorView(TemplateView):
    template_name="object-generator.html"

object_generator = objectGeneratorView.as_view()

class slinkieView(TemplateView):
    template_name = "slinkie.html"

slinkie = slinkieView.as_view()