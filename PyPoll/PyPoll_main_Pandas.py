
# coding: utf-8

# In[1]:


import pandas as pd


# In[2]:


location = r'C:/Users/richi/python-challenge/PyPoll/election_data.csv'
df = pd.read_csv(location)
df


# In[3]:


df.describe()


# In[4]:


df['Candidate'].nunique()

# of distinct values in a column


# In[5]:


df['Candidate'].value_counts()


# In[8]:


vote_count= df['Candidate'].value_counts()
vote_total= sum(vote_count)
percent_of_vote= vote_count/ vote_total
               


# In[7]:





# In[10]:


vote_count= df['Candidate'].value_counts()
vote_total= sum(vote_count)
percent_of_vote= vote_count/ vote_total
percent_of_vote

