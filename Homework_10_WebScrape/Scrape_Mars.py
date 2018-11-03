from splinter import Browser
from bs4 import BeautifulSoup as bs
import time
import pandas as pd
from splinter import Browser

 


def scrape():

    # Run scraped functions
    executable_path={"executable_path": "chromedriver.exe"}
    browser = Browser('chrome', **executable_path, headless=False)


    
    news_soup = bs(browser.html, 'html.parser')
    news_title = news_soup.find('div', class_='content_title').get_text() 
    news_para = news_soup.find('div', class_='article_teaser_body').get_text()
  
    #img_url = news_soup.find("img", class_="jpg")["src"]
    
    full_image = browser.find_by_id('full_image')
    full_image.click()
    
    tweet_list = news_soup.find_all('div', class_='js-tweet-text-container')

    mars_weather_tweet = ''
    for tweet in tweet_list:
        tweet_words = tweet.get_text().split(' ')
    
    if tweet_words[0] == 'Sol':
        mars_weather_tweet = tweet.get_text()

    # Store results into a dictionary
    mars = {
        "title": news_soup["title"],
        "paragraph": news_soup["para"],
        "full_image": browser.find_by_id["full_image"],
        "tweet_list": news_soup["mars_weather_tweet"],
        
    }

    
    # Redirect back to home page
    return mars
