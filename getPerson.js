var seniority = {
    "Associate Director, Engineering":1,
    "Manager - Software Development Engineer in Test":3,
    "Senior Engineering Manager in Test":2,
    "Lead Software Development Engineer in Test":4,
    "Senior Software Development Engineer in Test":5,
    "Software Development Engineer in Test":6,
    "Software Development Engineer in Test - Performance":6,
    "Software Development Engineer":6,
    "Software Development Engineer, Intern":7,
    "QA Engineer":6,
    "Subcontractor":7
};

export default function getPerson(data) {
    var person = {};
    person.company = "Razorpay";
    person.company_pic = "https://d6xcmfyh68wv8.cloudfront.net/assets/razorpay-glyph.svg";
    person.id = data["razorpay_id"];
    person.pid = data["manager_id"];
    person.tags = data["oncall"]?["Staff_OnCall"]:["Staff"];
    person.date_of_join = data["date_of_join"];
    person.department = data["department"];
    person.designation = data["designation"];
    person.email = data["email"];
    person.employee_function = data["employee_function"];
    person.github_user_name = data["github_user_name"];
    person.name = data["name"];
    person.img = data["profile_pic"];
    person.slack_tag = ((data["pod_slack_display_nameid"]=="")?"None":"@"+data["slack_display_name"]);
    person.slack_id = data["slack_id"];
    person.pod_id = ((data["pod_id"]=="")?"None":data["pod_id"]);
    person.pod_name = ((data["pod_name"]=="")?"None":data["pod_name"]);
    person.seniority = (seniority[data["designation"]]==null)?0:seniority[data["designation"]];
    person.oncall = data["oncall"];
    return person;
}