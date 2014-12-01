PJAXified
===========

This README documents whatever steps are necessary to get your application up and running.

## Install ##

**Create and activate your virtual environment**
    
    $ virtualenv pjaxifiedenv
    $ cd pjaxifiedenv
    $ source bin/activate

**Install Node**

    This process varies per platform.

**Install Less**

    $ npm install less

**Clone repository:**
    
    $ (pjaxifiedenv) git clone https://github.com/charlon/pjaxified.git

**Install dependencies:**

    $ (pjaxifiedenv) cd pjaxified
    $ (pjaxifiedenv) pip install -r requirements.txt

**Create local.py**
    
    $ (pjaxifiedenv) cp pjaxified/settings/local_example.py pjaxified/settings/local.py

**Set environment variable for local settings into terminal:**

    $ (pjaxifiedenv) export DJANGO_SETTINGS_MODULE=pjaxified.settings.local

**Update local.py settings**

Generate a secret key for your project using the URL provided

    SECRET_KEY = ''

**Test your server:**
    
    $ (pjaxifiedenv) python manage.py runserver 0.0.0.0:8000
    
    
**It worked!** You should see the Django server running when viewing http://localhost:8000


## Working ##

**Activate your virtualenv:**
    
    $ cd pjaxifiedenv
    $ source bin/activate
    
**Run server:**
    
    $ cd pjaxified
    $ (pjaxifiedenv) python manage.py runserver 0.0.0.0:8000
