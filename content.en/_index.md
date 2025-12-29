---
title: CharaRoll User Guide
type: docs
---

# CharaRoll User Guide

## Background

CharaRoll is used to generate random adjustable model parameters and save preferred parameter combinations as expression files.  
This software is particularly suitable for:  
- Creating random characters for custom models;  
- Facilitating bug detection when parameters interact with each other;  
- Generating random motion and expression combinations for models;  
- Experimenting with and optimizing parameter combinations.  

## Prerequisites
To use CharaRoll for model customization, you must have the following:  
1. VTube Studio software  
2. An adjustable model  
Note: (Need to add explanation for adjustable models: what kind of models can be customized with this software)  

## Getting Started
(Each step requires additional descriptions and screenshots; ideally, include an introductory video on Bilibili to demonstrate the simplest usage steps)  
1. **Model Loading**: Load a character model from VTS or a local file;  
2. **Parameter Configuration (Optional)**: Set parameter rules and linkage relationships in the configuration interface (default rules can also be used);  
3. **Parameter Selection**: Select the parameters to include in randomization;  
4. **Random Generation**: Click the generate button to obtain a random character appearance;  
5. **Real-Time Adjustment**: Adjust specific parameter values via sliders in the main interface;  
6. **Preview and Save**: Preview the result and save it as a configuration file.  

## Random Rule Configuration

(It would be more intuitive to illustrate with diagrams?)  
1. **Availability (Group/Subgroup/Parameter Available)**  
Definition: Each group/subgroup/parameter can be set to be available for randomization. Parameters set to "False" will not participate in randomization (i.e., will not affect the model's appearance) and will not be displayed in the parameter list in the main interface.  
Example: If Group A's availability is set to "False," its parameters will not be visible in the main interface, and clicking random will not generate results for parameters within that group.  
Purpose: Models may have non-adjustable parameters, such as physics parameters, which can be excluded using this rule.  

2. **Maximum Number of Participating Parameters Within a Group (Applicable to Groups/Subgroups)**  
Definition: Each group/subgroup can set an upper limit for the number of parameters participating in randomization. During each randomization, parameters within this group/subgroup have an equal probability (to-do: Is this implemented using the upper limit/total count? Effects when set alongside random probability) of participating in randomization, with at most the upper limit number of parameters generating random values.  
Example:  
Purpose: This rule limits the number of parameters that change simultaneously within a group to avoid overlapping model components appearing cluttered due to excessive changes in a certain type of parameter (e.g., multiple hair styles or accessories taking effect simultaneously).  

3. **Randomization Probability (Applicable to Groups/Subgroups/Parameters)**  
Definition: The probability of each group/subgroup/parameter participating in a single randomization.  
Example: If Parameter A has a randomization probability of 0.8, there is an 80% chance it will generate a random value when randomization is clicked, and a 20% chance it will not generate a random value (i.e., use the default value).  
If Group B has a randomization probability of 0.6, each parameter within the group has a 60% chance of generating a random value when randomization is clicked. If Parameter C within the group has its own randomization probability set to 0.5, it will follow its own probability. The priority order for randomization probability is: Parameter > Subgroup (if applicable) > Group.  
Purpose: Limit the number of parameters changing simultaneously within a group or restrict the probability of specific groups/parameters to enhance randomization effects.  

4. **Parameter Synchronization (Applicable to Parameters)**  
Definition: Set two parameters as related parameters, so their values remain locked. If one changes, the other will always change to the same value. (Constraint: The max/min/default attribute values of the two parameters must be consistent; otherwise, functionality is not guaranteed.)  
Example:  
Purpose: Ensure consistency between related parameters, such as left and right ear styles, left and right eye styles, etc.  

5. **Reset Results and Reset Values (Applicable to Groups/Subgroups/Parameters)**  
Definition: Reset the values of groups/subgroups/parameters back to their defaults.  

6. **Incremental Randomization (Under Development)**  
Definition: Enable incremental randomization, where the results of each randomization are temporarily stored and can be overwritten in subsequent randomizations.  
Example: Before the first randomization, Parameters A, B, and C are selected, while D, E, and F are not. Clicking the random button generates random values for A, B, and C, while D, E, and F retain their default values. Before the second randomization, Parameters A and D are selected. Clicking the random button generates new random values for A and D, overwriting A’s previous random value. The model will now use the new random values for A and D, the first random values for B and C, and the default values for E and F.  
Purpose: If you are satisfied with the randomized results of some parameters but wish to randomize others, this feature allows you to retain previous results while randomizing additional parameters.  

7. **Add/Remove Subgroup Feature (Applicable Only to Subgroups)**  
Definition: Allows further addition (deletion of subgroups is under development) of subgroups within a group (Live2D export models only have groups containing parameters; this feature enables users to further group parameters) and freely select existing parameters within the group to add to the subgroup.  
Note: Each parameter can currently belong to only one subgroup.  
Example:  
Purpose: Further group parameters based on relevance to facilitate adjusting randomization rules.  

8. **Random Range Constraint (Applicable Only to Parameters)**  
Definition: The random range of a parameter can be further restricted within the model's original range. After adjustment, the random value for this parameter will fall within the new range.  
Example: Parameter A has a maximum/minimum value of -30/30 in the model. It can be further restricted to 0/20, ensuring that any randomization results for this parameter will always fall within this range.  
Purpose: Avoid parameters randomizing to unsuitable value ranges.