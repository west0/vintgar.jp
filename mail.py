#!/usr/local/bin/python3.6
# -*- coding: UTF-8 -*-

import sys
import smtplib
from email.mime.text import MIMEText
from email.utils import formatdate

import cgi
import json
import asyncio


# parse request
postData = cgi.FieldStorage()

ACCOUNT = "info.vintgar@gmail.com"
TO = postData.getvalue('mailAddr','ns.westend@gmail.com')
PASSWORD = "gmail85gmail"
MESSAGE = "(自動返信メール)\nお問い合わせありがとうございます。\n以下の内容でお問い合わせ内容を受け付けました。\n\n----------\n[メールアドレス]\n" + postData.getvalue('mailAddr','none') + "\n\n\n[本文]\n" + postData.getvalue('message','no message.') + "\n----------\n\n2営業日以内に返信がない場合は、恐れ入りますが再度お問い合わせください。\n\n--\n西村ヨシロウ(vintgar.jp)\n※このメールアドレスは送信専用です。ご返信いただけません。"



def create_contact():
  msg = MIMEText(MESSAGE)
  msg["Subject"] = "vintgar.jpからお問い合わせがありました。"
  msg["From"] = ACCOUNT
  msg["To"] = "y.westend@gmail.com"
  msg["Date"] = formatdate(localtime=True)
  return msg


def create_message():
  msg = MIMEText(MESSAGE)
  msg["Subject"] = "お問い合わせを受け付けました。"
  msg["From"] = ACCOUNT
  msg["To"] = TO
  msg["Date"] = formatdate(localtime=True)
  return msg


# use sendmail()
'''
def sendmail_using_smtp_ssl():
    msg = create_message(sys._getframe().f_code.co_name)

    # using default port: 465
    s = smtplib.SMTP_SSL("smtp.gmail.com")
    s.login(ACCOUNT, PASSWORD)

    s.sendmail(ACCOUNT, ALIAS, msg.as_string())
    s.quit()
    
    print("finished: {}".format(sys._getframe().f_code.co_name))
'''

#use send_message()
def send_message_using_smtp_ssl():
  contact = create_contact()
  msg = create_message()

  try:
    s = smtplib.SMTP_SSL("smtp.gmail.com")
    s.login(ACCOUNT, PASSWORD)

    s.send_message(msg)
    s.send_message(contact)
    s.quit()
    
    dict = {
      'isComplete': 'true',
      'type': 'none',
      'args': 'none'
    }
    return json.dumps(dict)
  
  except Exception as e:
    dict = {
      'isComplete': 'false',
      'type': str(type(e)),
      'args': str(e.args)
    }
    return json.dumps(dict)

async def future_callback(callback):
  futures = []
  

if __name__ == "__main__":
  result = send_message_using_smtp_ssl()

  print('Content-type: application/json; charset=UTF-8\r\n')
  print(result)

  