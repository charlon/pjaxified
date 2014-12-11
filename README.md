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
    
    $ (pjaxifiedenv) cp pjaxified/local_example.py pjaxified/local_settings.py

**Update local.py settings**

Generate a secret key for your project using the URL provided

    SECRET_KEY = ''

**Create and populate the database:**
    
    $ (pjaxifiedenv) python manage.py syncdb
    $ (pjaxifiedenv) python manage.py populate_db
    
**Run your server:**
    
    $ (pjaxifiedenv) python manage.py runserver 0.0.0.0:8000
    
    
**It worked!** You should see the project running on http://localhost:8000


## Working ##

**Activate your virtualenv:**
    
    $ cd pjaxifiedenv
    $ source bin/activate
    
**Run server:**
    
    $ cd pjaxified
    $ (pjaxifiedenv) python manage.py runserver 0.0.0.0:8000
