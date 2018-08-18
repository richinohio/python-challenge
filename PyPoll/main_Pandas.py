
# coding: utf-8

# In[2]:


import pandas as pd
file = "C:/Users/richi/python-challenge/PyBank/budget_data.csv"
file_pd = pd.read_csv(file)
file_pd.head()


# In[10]:



df=file_pd
df=df.drop(columns=['Unnamed: 2', 'Unnamed: 3', 'Unnamed: 4', 'Unnamed: 5', 'Unnamed: 6'])
df




# In[13]:


df.count()


# In[22]:


df.sum()


# In[24]:


df.max()


# In[25]:


df.min()


# In[26]:


df.mean()

df.to_clipboard()

# In[30]:




