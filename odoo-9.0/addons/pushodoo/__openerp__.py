# -*- coding: utf-8 -*-
{
    'name': "Pushnotification",

    'summary': """
        Send Push notifications to users for every update in the website""",

    'description': """
        Send Push notifications to users for every update in the website
    """,

    'author': "Ladhari Safwene",
    'website': "http://www.saffist3r.me",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/openerp/addons/base/module/module_data.xml
    # for the full list
    'category': 'Tools',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base','mail'],

    # always loaded
    'data': [
        'views/notifications.xml',
        'data/init_data.xml',
        'views/inherit_usr.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}