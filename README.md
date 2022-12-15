# Drops of Jupyter
The Longevity Dilemma - An analysis on the diabetic population and the future impact that living longer will have based on current medicine and technology. 

![—Pngtree—rapid diabetes testingfinger test_5423791](https://user-images.githubusercontent.com/108758105/207190013-7b26bacb-4ddd-4c04-a8f0-0581567a4a29.png)

(we want: background/educational information
the topic/question/problem/issue we are analyzing
the objective/how we are going to solve/analyze/tackle this issue
Results and walkthrough of the analysis
Conclusion of the data analysis + other thoughts
Resources or citations used for credit where due
optional - list of files in our repo and what they are, the purpose, how to read them, extra info of the files.



## Overview
## Topic
- An analysis of the diabetic population and the future impact of living longer 
- Use supervised machine learning to predict who will have diabetic 
- Use SQL and Tableau to understand the demographics of regions and the Diabetes outcomes


#### Background

- According to the US census, we are nearing a point in history where the older population will outnumber of the younger.  
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
    - Given the extent that diabetes has affected our country, and its contribution to devastating comorbidities, particularly in the end states, it is concerning that those years of extreme poor health will be extended.
    
    - With the advances in medicine, Americans will live with these chronic conditions for many more years, and with an already strained healthcare system, we will have to prepare for far more dialysis, prosthetics, and resources for the blind due to diabete's direct impact on these health conditions. 
    
    - This will amplify for those in lower socioeconomic communities who studies show are disproportionately affected by diabetes in comparison to those communities of higher education and economic status. 


### Objective

This analysis aims to determine how diabetes continues to trend in America.  Knowing that communities of lower socioeconomic status are more heavily impacted, we want to see what it will take for those populations to have the resources necessary in preparation for living longer with diabetes. 
### Communication Protocols
- Daily Check in Via Slack 
    - Report what you were able to complete each day at 7pm 
        - If nothing to report, still check in and support team in whatever challenges they faced that day 
-In case of emergency contact Elina (###)###-####
 
### Description of the data sources

- 2021 National Health Interview Survey (NHIS) from the Centers for Disease Control and Prevention (CDC)
    - link: https://www.cdc.gov/nchs/nhis/2021nhis.htm
    - Table: Sample adult interview
        - Demographics
        - Health status: diabetes
        - Insurance
        - Income
- 2020 USDA Food Environment Atlas Data: County Level Data on population, food access, and poverty.
    - link: https://www.ers.usda.gov/data-products/food-environment-atlas/data-access-and-documentation-downloads/

- adult-summary.pdf
    - This PDF contains the entries/data that we used for this analysis.

- adult-codebook.pdf
    - This PDF contains the key's for the variables in the adult-summary.pdf.


### Questions to address with this study
- What demographic socioeconomic factors are correlated with diabetes?
- Based on these factors, who will likely get diabetes? 
- How successfully can demographics and socioeconomic status predict diabetes?
- Are there any other findings that can be inferred from the analysis?
- What are changes/solutions that can be made to positively impact this issue?

### Technologies Used
### Data Cleaning and Analysis
Team we all need to edit here: Jupyter Notebook, and Python, Pandas will be used to clean the data and export to SQL. Pandas and SQL will be used to perform an exploratory analysis. Further analysis will be completed using Machine Learning and Tableau. 

### Database Storage
Elina edit as needed: PGAdmin is the database we intend to use. We will import CSVs using Pandas and integrate with Tableau to display the data in a dashboard.

![ERD](https://github.com/DaniliukK95/Drops_Of_Jupyter/blob/81f3e1ca96d5cea53d8bd35e86a653bfb7a51d41/images/QuickDBD-export.png)

### Machine Learning
Amy edit as needed: SciKitLearn is the ML library we'll be using to create a classifier. Our training and testing setup is ___. Extra ML verbiage here.

### Dashboard
Manny Edit as needed: In addition to using Tableau, we will also integrate D3.js for a fully functioning and interactive dashboard. It will be hosted on ___.

#### Manny's Perspective
With diabetes playing a major role in health complications throughout my family history, understanding how to look at this problem through a true analytic perspective can give me insight on how this impacts the world.  It's one thing to see maps and charts, but another to be able to produce those things with my team and tell a story ourselves.  With the reality that we will live longer lives, the fact is that those extra years won't be great for everyone.  with longevity increasing, that may spell out extra years of pain and suffering for many.  For people with late onset prediabetes, this may mean seeing late-stage diabetes play out in their lifetimes.  This translates to more people dealing with dialysis, amputations, and blindness, to name some of the more severe outcomes of diabetes. The comprehensive nature of this illness cannot be tackled with a mere bootcamp project so I plan on tackling this issue past this course, but I would love to be able to use the skills learned througout this course to continue a conversation on how to be part of the solution to this epidemic that has claimed many loved ones.