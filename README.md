# The Access Dilemma
An analysis on the diabetic and non-diabetic population in the United States regarding Socio-economic status. 

Drops of Jupyter group - [Amy Ying Lin](https://github.com/amyylin1), [Elina Dart](https://github.com/DartElina), [Manny Linares](https://github.com/MRLinares), [Kevin Daniliuk](https://github.com/DaniliukK95).
_________________________________________
## Overview
### Topic
Our topic is on diabetes in the United States and the correlation of socioeconomic factors to this disease.  

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
The objective of this analysis is to understand the relationship between Social economic status and diabetes.  The article mentioned from “The World Bank” has identified a link between poverty and disease. The other article mentioned “Diabetes Journal” reported that those with lower socioeconomic status have higher diabetes mortality. These articles indicate a relationship between low socioeconomic status and barriers to quality healthcare access. The number one way for people with lower socioeconomic status to achieve better results is to catch their diabetes early. Individuals may not see the value in regular physicals, or struggle to afford them. The result is a late diagnosis.

We chose this topic because of our common knowledge and interest in the disease with our previous experience and medical history. Diabetes is very common and there is a high probability that everyone in this room knows at least one person affected by it. This also means that we would be able to access vast amounts of data related to the topic. Knowing that communities of lower socioeconomic status are more heavily impacted, we wanted to learn why? 

### Questions to address with this study 
- What demographics and socioeconomic factors are correlated with diabetes?
   - Based on these factors, who will likely get diabetes? 
   - How successfully can demographics and socioeconomic status predict diabetes?
- What are changes/solutions that can be made to positively impact this issue?

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
_________________________________________
## Dashboard
 The following link connects to our tableau which houses our exploration of the data and tells the story we learned from it. 
[Exploratory analysis](https://public.tableau.com/app/profile/amy8818/viz/finalproject_16711568635250/Story1?publish=yes)
In addition to using [Tableau](https://public.tableau.com/app/profile/amy8818/viz/finalproject_16711568635250/Story2?publish=yes), we have also integrated D3.js for a fully functioning and interactive dashboard website. It is hosted on a local server while we are in development of our flask app.
### How to navigate through the dashboard
+++++FILL IN
![Dashboard](https://github.com/DaniliukK95/Drops_Of_Jupyter/blob/17bd6c2227b9fb99b1b23f48c49b2dfbeec67dd7/images/dashboard.png)
Our html dashboard integrates our Data, Prediction app, and Tableau in one location. Along the top we have a navigation bar that can take you through the different elements of the dashboard. 

### Exploring Data with Visualizations in Tableau 
- Fig. BMI and diabetes. 

    ![Screen Shot 2022-12-23 at 8 35 59 AM](https://user-images.githubusercontent.com/108419097/209344805-3d15a517-42ab-423e-92f1-af975aeb4369.png) 
_________________________________________
### Machine Learning
#### Description of preliminary data processing with Machine Learning
- First, all data is imported from the database into the Google Colab Notebook that implements the Machine Learning.
- [scikit-Learn](https://scikit-learn.org/stable/) is the machine learning data analysis library we used to create our supervised models.
- Handle categorical attributes with pandas get dummies code.

#### Description of data features selection
- We used a logit function to identify which of our variables were statistically significant. We dropped variables that were insignificant to diabetes such as Region, and General Health Status. General Health Status was a self selecting variable, individuals rated their health and this was not relevant to the outcome of diabetes. 
- Features:  variables of demographics/socioeconomic status ( sex, race, education, poverty ratio), diabetic-related health status( weight, age, and BMI). 
- Target: Diabetes.
- Preprocessing data was essential due to the high number of categorical variables from our data set.  
- All variables (except for weight, age, and poverty_ratio) are categorical variables.
- Data is pre-processed with [preprocessing module](https://scikit-learn.org/stable/modules/preprocessing.html.).

#### Description of how data is split into training and test set
- Data is split into random training and test subsets with [the model_selection module](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html).
- We end up with four sets:  X is split into X_train and X_test sets, and y is split into y_train and y_test sets. 
- We have a unbalanced data set (22,000 without diabetes vs 2500 with diabetes) so train and test subsets are scaled using [Standard Scaler](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html#sklearn.preprocessing.StandardScaler.fit_transform). 
- Samples are then over sampled using RandomOverSampler as the last step before training the model. 

### Model Explanation: Logistic regression 
- We chose logistic regression to predict diabetes based on the socio-economical factors listed above.
- The target variable only has two possible values, whether a person has been diagnosed with diabetes before or no. When this classification model encounters new data, it predicts whether the individual has diabetes.
- Logistic Regression is then trained on the scaled over sampled train data, and tested for accuracy on the test data.
- Accuracy score: 82.5%
- Precision Score: 35.5%
- Recall Score: 81.7%
- Benefit: logistic regression is relatively simple to execute and understand.
- Limitation: Due to so many categorical variables possible models to train and test in the future could be an Support Vector Machine model, or Random Forest Classifier. 
_________________________________________
## Results and Conclusion
Our machine learning model is highly accurate, and highly sensitive. It may result in fallse positive. However, since our aim is to catch diabetes earlier we believe this is a positive outcome. 

We used this trained logistic model and integrated it into a flash app. In the end we have produced an app that takes in user input (weight, height, age, income, household size, education background, gender and race) transforms their data, scales it to fit our machine learning predictive model and produces the probability an individual has diabetes that users could use from the comfort of their own homes. Our model has an 82.5% accuracy score, 35.5% precision, and 81.7% recall score. 

This app is a solution that helps individuals take matters into their own hands. The app can not replace visiting your primary care doctor. However, if you were are unable to see a doctor, this tool allows you to measure your probability of having diabetes. It aims to help people get diagnosed as early as possible, so people can live longer with better health outcomes. 

### Things we would have done differently
 Our project was aimed at addressing access of care for low socioeconomic status individuals. So when we began the project and downloaded the NHIS data we were inititally overwhelmded by 30,000 rows and 600+ columns. We reduced our sample columns to our variables of interest. We still have over 40 columns but perhaps we shouldhave analyzed the correlations of the initial variables from our data set. In the future we would run a correlation function on the entire data set to identify variables of interest in addition to the SES variables. We do have 3 team members with medical/bio-science backgrounds and used their background knowledge to identify the health indicators most correlated with diabetes. This is why we kept variables such BMI, Weight, and Age. 
_________________________________________
## Tools, Languages and Resources

>**Languages:** <br>
>Python, JavaScript, PostgreSQL <br> 

>**Software:** <br>
>VS Code, JupyterNotebook, Pandas, Numpy, Scikit-Learn, pgAdmin4, GoogleCollab, TableauPublic, Github, Bootstrap, HTML, CSS<br>

>**Resources:** <br>
>[2021 National Health Interview Survey (NHIS)](https://www.cdc.gov/nchs/nhis/index.htm), [Centers for Disease Control and Prevention](https://www.cdc.gov/), [Google](https://www.google.com/), [Stack Overflow](https://stackoverflow.com/), [Columbia Engineering BCS](https://courses.bootcampspot.com/), [The World Bank - link between poverty and disease](https://www.worldbank.org/en/topic/health/brief/poverty-health), [Diabetes Journal - lower socioeconomic status have higher diabetes mortality.](https://diabetesjournals.org/care/article/36/1/49/38282/Socioeconomic-Status-and-MortalityContribution-of)
