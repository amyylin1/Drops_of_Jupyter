# The Access Dilemma
An analysis of the diabetic and non-diabetic population in the United States regarding Socio-economic status. 

Drops of Jupyter group - [Amy Ying Lin](https://github.com/amyylin1), [Elina Dart](https://github.com/DartElina), [Manny Linares](https://github.com/MRLinares), [Kevin Daniliuk](https://github.com/DaniliukK95).
_________________________________________
## Overview
### Topic
Our topic is on diabetes in the United States and the correlation of socioeconomic factors to this disease. Studies have shown a relationship between low socio-economic status and barriers to quality healthcare access. 

+++++ is our topic on healthcare access though? seems like were just looking at status and if you might get diabetes. 

### Background
_Diabetes_ is a chronic condition that affects the way the body processes blood sugar (glucose). It occurs when the body does not produce enough insulin, or when the body's cells do not properly use the insulin it has produced. Insulin is a hormone that helps regulate blood sugar levels but if not properly managed, diabetes can lead to serious health complications, including heart disease, stroke, kidney damage, blindness, and nerve damage.

Some Statistics:
- Diabetes is a leading cause of death and disability, and it is the seventh leading cause of death globally.
- Type 2 diabetes is the most common form of diabetes, accounting for around 90% of all cases (The one you can develop).
- In 2021, an estimated 34.2 million people in the United States, or 10.5% of the population, had diabetes.
- The prevalence of diabetes has been increasing in recent years, with the number of people with the condition increasing by 2 million per year since 2014.
- African Americans, Hispanic/Latino Americans, American Indians, and Alaska Natives have a higher prevalence of diabetes than non-Hispanic whites.

_Socioeconomic factors_ are social and economic conditions that can influence an individual's or group's health, well-being, and access to resources and opportunities. These factors can include things like income, education, occupation, housing, and access to healthcare and social services.

### Objective
+++++FILL IN


### Questions to address with this study 
- What demographic socioeconomic factors are correlated with diabetes?
- Based on these factors, who will likely get diabetes? 
- How successfully can demographics and socioeconomic status predict diabetes?
- Are there any other findings that can be inferred from the analysis?
- What are changes/solutions that can be made to positively impact this issue?
+++++EDIT/ADD MORE/REMOVE STUFF

### Description of the data sources
The NHIS tracks the health status and health care access of Americans and has been doing so since 1957. Using this data which tackles national health objectives, they work to identify and bring more information to significant health problems. the data size we extracted from the NHIS contains about 30,000 rows (individuals) and 622 columns (variables). the variabls we are focussing on include demographics, health status, insurance and income. 

- Data Source: [2021 National Health Interview Survey (NHIS) from the Centers for Disease Control and Prevention (CDC)](https://www.cdc.gov/nchs/nhis/2021nhis.htm)
- adult21.csv (https://github.com/DaniliukK95/Drops_Of_Jupyter/blob/Kevin_D_Week4/1_Raw_data/adult21.csv)
   - This CSV is the RAW data of everything.
- adult-summary.pdf (https://github.com/DaniliukK95/Drops_Of_Jupyter/blob/Kevin_D_Week4/1_Raw_data/adult-summary.pdf)
   - This PDF contains the descriptions of the variables.
- adult-codebook.pdf (https://github.com/DaniliukK95/Drops_Of_Jupyter/blob/Kevin_D_Week4/1_Raw_data/adult-codebook.pdf)
   - This PDF explains the meanings of the numerical values. 
- readme.txt (https://github.com/DaniliukK95/Drops_Of_Jupyter/blob/Kevin_D_Week4/1_Raw_data/readme.txt)
   - It is important to read this text file for running the code. 
_________________________________________
+++++ARE WE DONE HERE?
## Data Cleaning and Analysis
The team used Jupyter Notebook, Python, Pandas and Numpy to extract, transform the data and load to SQL database. In this process we explored the data with the support of the data Summary and Codebook to translate the coded categorical data. Then using Tableau we visualized the data in a series of pie charts and graphs. Further analysis was completed using Machine Learning and Logistic Regression. 

### Database Storage
PGAdmin is the tool we used for our database. We imported, cleaned, and transformed CSVs using Pandas and integrated the data into our other analysis tools. PgAdmin4 was also be used to perform analysis. The images below include first: the ERD, which illustrates the structure of Database. Then, the second image is presented to depict a join query that joins our tables so a user can compare socioeconomic demographics alongside an individual's health status. 

![ERD](https://github.com/DaniliukK95/Drops_Of_Jupyter/blob/e1182de36d7d52bbcd8f819ee655abede02891bf/images/ERD_12_21_22.png)

![Join](https://github.com/DaniliukK95/Drops_Of_Jupyter/blob/29c761926660afb86efdce3850198d08b267529b/images/Join%20Query%20.png)

#### Our Sample Data contains:
  - Over 29,000 observations.
  - 3,134 individuals with Diabetes.
  - This is just over 10% and comparable with population estimates. 
  - 45% of our sample is male.
  - 75% White, 11% African American, 6% Asian.
  - Average Poverty Ratio is 4 (meaning income is 4 times the national poverty threshold).
  - 39% have attained at least a bachelor's degree.
  
### Machine Learning
#### Description of preliminary data processing with Machine Learning
- First, all data is imported from the database into the Google Colab Notebook that implements the Machine Learning.
- [scikit-Learn](https://scikit-learn.org/stable/) is the machine learning data analysis library we used to create our supervised and unsupervised models.
- Handle categorical attributes with get dummies code.

#### Description of data features selection
- Features:  variables in demographics (age, sex, race, education, poverty ratio, and region), diabetic-related health status, general health status, weight, and BMI. 
- Target: Diabetes.

#### Description of how data is split into training and test set
- Data is split into training and testing sets by using Scikit-learn’s train_test_split function.
- We end up with four sets:  X is split into X_train and X_test sets, and y is split into y_train and y_test sets. 

### Model 1: Logistic regression 
- We chose logistic regression to measure the feature correlation probability to the target, Diabetes. 
- All variables (except for weight, age, and poverty_ratio) are categorical variables.
- The target variable only has two possible values, whether a person has been diagnosed with diabetes before or no. When this classification model encounters new data, it predicts whether the individual would have diabetes.
- Data is pre-processed with [preprocessing module](https://scikit-learn.org/stable/modules/preprocessing.html.).
- Data is split into random training and test subsets with [the model_selection module](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html).
- Benefit: logistic regression is relatively simple to execute and understand.
- Limitation: the accuracies from one or multiple variables are low. Based on the data visualization below, linear regression is more suitable.
- Fig. BMI and diabetes. 

    ![Screen Shot 2022-12-23 at 8 35 59 AM](https://user-images.githubusercontent.com/108419097/209344805-3d15a517-42ab-423e-92f1-af975aeb4369.png)


### Explanation of model choices: Logistic regression 
- We choose logistic regression to predict diabetes based on socio-economical factors.  
- All variables (except BMI, age, and income-to-poverty ratio) are categorical. 
- The target variable only has two possible outcomes, whether a person has diabetes or not.  When this classification model encounters new data, it predicts whether the individual has diabetes.
- Data is pre-processed with [preprocesssing module](https://scikit-learn.org/stable/modules/preprocessing.html.).
- Data is split into random training and test subsets with [the model_seletion module](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html).
- Benefit:  logistic regression is relatively simple to execute and understand. 
- Limitation: the accuracies from one or multiple variables are low.  

_________________________________________
## Results and Conclusion
+++++FILL IN

### Things we would have done differently
(preparation, execution)
+++++FILL IN 
In terms of the preparation, we noticed that the original questions we wanted to focus on were extremely specific. The medical field along with its available data, is complicated. There are many specifics that come into medicine such as: 
- the disease which can have many different types along with severities
- the occurrence of said disease, its type, its severity and if those who are affected by it are even being researched for the public to access
- A lot of data that could be used is dispersed on the internet in forms of research papers, private and public studies, and private and public databases. 
- With healthcare being a sensitive topic and patients wanting to keep their information and identity private, this also can limit was is available to the public and what is not. 
- some of the sources also would require payments to access certain data. 
- Another issue thats very well known in medical research is that just because a study contains data, it does not mean that the study was conducted accurately and can cause false biases in analysis. 
There are other stipulations that can limit the accuracy and availability of information for someone trying to publicly access data but these are some common ones to demonstrate the issues we came accross. A way around this would be if we were given access to certain data either by requesting or purchasing data. 
To save some time that we spent scavewnging for data, we could have started with a more broad question or topic to find available data and then to run through this data to come up with a more specific question based on the information we are able to obtain. 

_________________________________________
## Dashboard
[Exploratory analysis](https://public.tableau.com/app/profile/amy8818/viz/finalproject_16711568635250/Story1?publish=yes)
In addition to using [Tableau](https://public.tableau.com/app/profile/amy8818/viz/finalproject_16711568635250/Story2?publish=yes), we have also integrated D3.js for a fully functioning and interactive dashboard website. It is hosted on ___ (Gitpages).
+++++EDIT THIS?

### How to navigate through the dashboard
+++++FILL IN
_________________________________________
## Tools, Languages and Resources

>**Languages:** <br>
>Python, JavaScript, PostgreSQL <br> 

>**Software:** <br>
>VS Code, JupyterNotebook, Pandas, Numpy, Scikit-Learn, pgAdmin4, GoogleCollab, TableauPublic, Github, Bootstrap, HTML, CSS<br>

>**Resources:** <br>
>[2021 National Health Interview Survey (NHIS)](https://www.cdc.gov/nchs/nhis/index.htm), [Centers for Disease Control and Prevention](https://www.cdc.gov/), [Google](https://www.google.com/), [Stack Overflow](https://stackoverflow.com/), [Columbia Engineering BCS](https://courses.bootcampspot.com/)
