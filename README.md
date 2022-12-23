# Drops of Jupyter
The Longevity Dilemma - An analysis on the diabetic population and the future impact that living longer. 

![—Pngtree—rapid diabetes testingfinger test_5423791](https://user-images.githubusercontent.com/108758105/207190013-7b26bacb-4ddd-4c04-a8f0-0581567a4a29.png)

(we want: background/educational information
the topic/question/problem/issue we are analyzing
the objective/how we are going to solve/analyze/tackle this issue
Results and walkthrough of the analysis
Conclusion of the data analysis + other thoughts
Resources or citations used for credit where due
optional - list of files in our repo and what they are, the purpose, how to read them, extra info of the files.



## Overview
### Topic
- An analysis of the population and diabetic related variables 
- Use supervised machine learning to predict who will have diabetic 
- Use SQL and Tableau to understand the demographics of regions and the Diabetes outcomes

### Background

- According to the US census, we are nearing a point in history where the older population will outnumber the younger.  
- “By 2034 (previously 2035), there will be 77.0 million (previously 78.0) people 65 years and older compared to 76.5 million (previously 76.7 million) under the age of 18.” 

- The CDC states in its national DIABETES STATISTICS REPORT THAT:
    - 37.3 MILLION PEOPLE HAVE DIABETES (~11% OF the US POPULATION) 
    - 96 MILLION ARE PREDIABETIC (38% OF the ADULT POPULATION) 
    - 26.4 MILLION OF THOSE PREDIABETIC ARE 65 YEARS OR OLDER (~50% OF THE SENIOR POPULATION) 
    - In the last 20 years, diabetes diagnoses have more than doubled.

- Diabetes is:
    - The Leading cause of kidney failure, lower-limb amputations, and adult blindness. 
    - The 7th leading cause of death 

- Problem: 
    - Given the extent that diabetes has affected our country, and its contribution to devastating comorbidities, particularly in the end stages, it is concerning that those years of extreme poor health will be extended.
    
    - With the advances in medicine, Americans will live with these chronic conditions for many more years, and with an already strained healthcare system, we will have to prepare for far more dialysis, prosthetics, and resources for the blind due to diabete's direct impact on these health conditions. 
    
    - This will amplify for those in lower socioeconomic communities who studies show are disproportionately affected by diabetes in comparison to those communities of higher education and economic status. 

### Objective

This analysis aims to determine how diabetes continues to trend in America.  Knowing that communities of lower socioeconomic status are more heavily impacted, we want to see what it will take for those populations to have the resources necessary in preparation for living longer with diabetes. 

### Questions to address with this study

- What demographic socioeconomic factors are correlated with diabetes?
- Based on these factors, who will likely get diabetes? 
- How successfully can demographics and socioeconomic status predict diabetes?
- Are there any other findings that can be inferred from the analysis?
- What are changes/solutions that can be made to positively impact this issue?

### Communication Protocols

Our team is made up of 4 individuals each working using different tools. To streamline our communication to better support each other we have developed these protocols. 
- Weekly assignments for each team member to complete
- Daily Check-ins Via Slack 
    - Report what you were able to complete each day at 7pm, as well as where you struggled and how your team can support you. 
        - If nothing to report, still check in and support team in whatever challenges they faced that day.
-In case of emergency contact Elina (###)###-####.
- Meeting via zoom 2-3 times per week to merge git hub, review code, and resolve conflicts together.
 
### Description of the data sources

- 2021 National Health Interview Survey (NHIS) from the Centers for Disease Control and Prevention (CDC)
    - link: https://www.cdc.gov/nchs/nhis/2021nhis.htm
    - Table: Sample adult interview
        - Demographics
        - Health status: diabetes
        - Insurance
        - Income
    - adult-summary.pdf
        - This PDF contains the entries/data that we used for this analysis.
    - adult-codebook.pdf
        - This PDF contains the key's for the variables in the adult-summary.pdf.

## Technologies Used
### Data Cleaning and Analysis
Team we all need to edit here: Jupyter Notebook, and Python, Pandas will be used to clean the data and export to SQL. Pandas and SQL will be used to perform an exploratory analysis. Further analysis will be completed using Machine Learning and Tableau. 

### Database Storage
Elina edit as needed: PGAdmin is the database we intend to use. We will import CSVs using Pandas and integrate with Tableau to display the data in a dashboard.


![ERD](https://github.com/DaniliukK95/Drops_Of_Jupyter/blob/e1182de36d7d52bbcd8f819ee655abede02891bf/images/ERD_12_21_22.png)

![Join](https://github.com/DaniliukK95/Drops_Of_Jupyter/blob/29c761926660afb86efdce3850198d08b267529b/images/Join%20Query%20.png)

### Machine Learning
#### Description of preliminary data processing

[scikit-Learn](https://scikit-learn.org/stable/) is the machine learning data analysis library we'll be using to create our supervised and unsupervised model.

# elina down v

-	Drop missing values since most machine learning algorithms cannot work with missing features
-	Handle categorical attribute

#### Description of data features selection
-	Features:  variables in demographics, diabetic-related health status, general health status, insurance, and income level.
-	These features are chosen because of their potential correlation with our target: “Taking diabetic pills”. 

#### Description of how data is split into training and test set
-	Data is split into training and testing sets by using Scikit-learn’s train_test_split function.
-	We end up with four sets:  X is split into X_train and X_test sets, and y is split into y_train and y_test sets. 

### Explanation of model choices

#### Initial model: Logistic regression 

-	We choose logistic regression to predict factor(s) that are correlated with diabetes. 
-	All variables (except for weight, age, and poverty_ratio) are categorical variables. 
-	The target variable only has two possible values, whether a person has been diagnosed with diabetes before or no.  When this classification model encounters new data, it predicts whether the individual would have diabetes.
- Data is pre-processed with [preprocesssing module](https://scikit-learn.org/stable/modules/preprocessing.html.).
- Data is split into random training and test subsets with [the model_seletion module](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html).
-	Benefit:  logistic regression is relatively simple to execute and understand. 
- 	Limitation: the accuracies from one or multiple variables are low.  Based on the data visualization below,   linear regression is more suitable.
- Fig. BMI and diabetes 
![Screen Shot 2022-12-23 at 8 35 59 AM](https://user-images.githubusercontent.com/108419097/209344805-3d15a517-42ab-423e-92f1-af975aeb4369.png)


#### Model 2:  Linear regression


### Dashboard
[Exploratory analysis](https://public.tableau.com/app/profile/amy8818/viz/finalproject_16711568635250/Story1?publish=yes)


Manny Edit as needed: In addition to using [Tableau](https://public.tableau.com/app/profile/amy8818/viz/finalproject_16711568635250/Story2?publish=yes), we will also integrate D3.js for a fully functioning and interactive dashboard. It will be hosted on ___ (Gitpages).

### Tools
>**Languages:** <br>
>Python, JavaScript, PostgreSQL <br> 
>**Software:** <br>
>VS Code, JupyterNotebook, Pandas, pgAdmin, GoogleCollab, Microsoft Excel, TableauPublic, Github, Bootstrap, HTML, CSS
>**Resources:** <br>
>2021 National Health Interview Survey (NHIS), Google, Stack Overflow
