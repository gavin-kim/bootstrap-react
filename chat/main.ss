> topic ask_username {keep}

    + {^hasUsername()} *
    - Welcome back, ^get("name")! ^setTopic("confirm_user_info") {@__user_info__}

    + __user_info__
    - Please confirm that your information is\n
    ^ Phone: ^get("phone")\n
    ^ Age: ^get("age")\n
    ^ City: ^get("city")\n
    ^ is this correct?

    + {^isYes()} *
    - Please type your name again

    + {^isNo()} *
    - Can you tell me your name? ^setTopic("create_user_info")

    + *
    - Sorry... I can't remember your name. Do you want to try again?

< topic


> topic confirm_user_info {keep}

    + {^isYes()} *
    - What is the most important thing to know about you? ^setTopic("diagnostic_questions")

    + {^isNo()} *
    - Can you tell me your name? ^setTopic("create_user_info")

    + *
    - Please answer yes or no

< topic


> topic create_user_info {keep}

    + *(1-3)
    - Nice to meet you, <cap>!\n ^save("name",<cap>)
    ^ What is your phone number?

    + *(1-3)
    % nice to meet you, *
    - Are you male or female? ^save("phone",<cap>)

    + *1
    % are you male or female? *
    - How old are you? ^save("sex", <cap>)

    + *1
    % how old are you? *
    - What city do you live? ^save("age", <cap>)

    + *(1-3)
    % what city do you live? *
    - Have you been travelling lately? ^save("city", <cap>)

    + {^isYes()} *
    % have you been travelling lately? *
    - Where have you traveled?

        + *(1-5)
        % where have you traveled?
        - What is the most important thing to know about you? ^save("traveledPlaces", <cap>) ^setTopic("diagnostic_questions")

    + {^isNo()} *
    % have you been travelling lately? *
    - What is the most important thing to know about you? ^setTopic("diagnostic_questions")

    + *
    - Sorry... I don't get it

< topic


> topic diagnostic_questions {keep}

    + *(1-10)
    % what is the most important thing to know about you? *
    - ^save("mostImportant", <cap>) Thank you. Now please tell me how is your health?

    + {^isEmergency()} *
    % * Thank you. Now please tell me how is your health?
    - ^save("emergency", <cap>) We call an ambulance. How do you feel today? Any stress or anxiety?

        + *
        % * We call an ambulance. How do you feel today? Any stress or anxiety?
        - ^save("feel", <cap>) What is the reason for your call today?

    + *
    % * Thank you. Now please tell me how is your health?
    - ^save("health", <cap>) How do you feel today? Any stress or anxiety?

    + *
    % * How do you feel today? Any stress or anxiety?
    - ^save("feel", <cap>) What is the reason for your call today?

    + *
    % * What is the reason for your call today?
    - ^save("reason", <cap>) Thank you very much for your call. I hope you are feeling better. Is there anything else I can help you with?

    + *
    % * Thank you very much for your call. I hope you are feeling better. Is there anything else I can help you with?
    - ^save("anythingElse", <cap>) Would you like some benefit?

    + *
    % * Would you like some benefit?
    - ^save("benefit", <cap>) Thank you and have a nice day. ^setTopic("common")

< topic


> topic common {keep}

    + *
    - How are you?

< topic


+ {^isYes()} *
- Can you remind me your name? ^setTopic("ask_username")

+ {^isNo()} *
- Can you tell me your name? ^setTopic("create_user_info")

+ *
- Sorry... I don't get it