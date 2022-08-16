import React, { Component, useEffect } from 'react';
import OrgChart from '@balkangraph/orgchart.js';
import MockData from "./profile_mock";
import ParseData from './parseData';

function MyProfile(props) {
    ParseData();

    var divRef = React.createRef();
    useEffect(()=>{

        OrgChart.LINK_ROUNDED_CORNERS = 20;
        OrgChart.RENDER_LINKS_BEFORE_NODES = true;
        OrgChart.templates.department = Object.assign({}, OrgChart.templates.ana);
        OrgChart.templates.department.size = [250, 50];
        OrgChart.templates.department.node =
            '<rect x="0" y="0" width="250" height="50" fill="#ffffff" stroke-width="1" stroke="#aeaeae" rx="30"></rect>';
        OrgChart.templates.department.field_1 = '<text style="font-size: 18px;" fill="#aeaeae" x="125" y="30" text-anchor="middle">{val}</text>';

        OrgChart.templates.department.ripple = {
            radius: 0,
            color: "#F57C00",
            rect: null
        };

        OrgChart.templates.staff = Object.assign({}, OrgChart.templates.ana);
        OrgChart.templates.staff.size = [150, 224];
        OrgChart.templates.staff.node =
            '<rect x="0" y="0" width="150" height="224" fill="#ffffff" stroke-width="1" stroke="#aeaeae" rx="30"></rect>';
        OrgChart.templates.staff.field_0 = '<text style="font-size: 17px;" fill="#aeaeae" x="75" y="40" text-anchor="middle">{val}</text>';
        OrgChart.templates.staff.field_1 = '<text style="font-size: 14px;" fill="#aeaeae" x="75" y="140" text-anchor="middle">{val}</text>';
        OrgChart.templates.staff.field_2 = '<text style="font-size: 14px;" fill="#aeaeae" x="75" y="170" text-anchor="middle">{val}</text>';
        OrgChart.templates.staff.field_3 = '<text style="font-size: 14px;" fill="#aeaeae" x="75" y="200" text-anchor="middle">{val}</text>';
        OrgChart.templates.staff.img_0 = '<image preserveAspectRatio="xMidYMid slice" x="50" y="60" xlink:href="{val}" width=50px height=50px></image>';
        OrgChart.templates.staff.img_1 = '<image preserveAspectRatio="xMidYMid slice" x="1" y="7" xlink:href="{val}" width=45px height=45px></image>';

        OrgChart.templates.staff.ripple = {
            radius: 0,
            color: "#FFCA28",
            rect: null
        };

        OrgChart.templates.staff_oncall = Object.assign({}, OrgChart.templates.ana);
        OrgChart.templates.staff_oncall.size = [150, 224];
        OrgChart.templates.staff_oncall.node =
            '<rect x="0" y="0" width="150" height="224" fill="#ffffff" stroke-width="1" stroke="#aeaeae" rx="30"></rect>';
        OrgChart.templates.staff_oncall.field_0 = '<text style="font-size: 17px;" fill="#aeaeae" x="75" y="40" text-anchor="middle">{val}</text>';
        OrgChart.templates.staff_oncall.field_1 = '<text style="font-size: 14px;" fill="#aeaeae" x="75" y="140" text-anchor="middle">{val}</text>';
        OrgChart.templates.staff_oncall.field_2 = '<text style="font-size: 14px;" fill="#aeaeae" x="75" y="170" text-anchor="middle">{val}</text>';
        OrgChart.templates.staff_oncall.field_3 = '<text style="font-size: 14px;" fill="#aeaeae" x="75" y="200" text-anchor="middle">{val}</text>';
        OrgChart.templates.staff_oncall.field_4 = '<text style="font-size: 14px;" fill="#FF0000" x="70" y="20" text-anchor="middle">On Call</text>';
        OrgChart.templates.staff_oncall.img_0 = '<image preserveAspectRatio="xMidYMid slice" x="50" y="60" xlink:href="{val}" width=50px height=50px></image>';
        OrgChart.templates.staff_oncall.img_1 = '<image preserveAspectRatio="xMidYMid slice" x="1" y="7" xlink:href="{val}" width=45px height=45px></image>';

        OrgChart.templates.staff_oncall.ripple = {
            radius: 0,
            color: "#FFCA28",
            rect: null
        };

        var profIcon = `<svg width="24" height="24" viewBox="0 0 490 490" >
            <polygon fill="#fff" points="320.217,101.428 171.009,5.241 171.009,392.966 320.217,485.979 	"/>
            <polygon fill="#fff" points="335.529,99.857 335.529,484.679 490,391.948 490,0 	"/>
            <polygon fill="#fff" points="155.697,3.659 0,82.979 0,490 155.697,392.942 	"/>
        </svg>`;
        var chart = new OrgChart(document.getElementById("orgTree"), {  
            editForm: {
                generateElementsFromFields: false,
                elements: [
                    { type: 'textbox', label: 'Name', binding: 'name'},
                    { type: 'textbox', label: 'Razorpay Id', binding: 'id'},
                    { type: 'textbox', label: 'Date Of Join', binding: 'date_of_join'},
                    { type: 'textbox', label: 'Department', binding: 'department'},
                    { type: 'textbox', label: 'Designation', binding: 'designation'},
                    { type: 'textbox', label: 'Email', binding: 'email'},
                    { type: 'textbox', label: 'Function', binding: 'employee_function'},
                    { type: 'textbox', label: 'Github Username', binding: 'github_user_name'},
                    { type: 'textbox', label: 'Slack Tag', binding: 'slack_tag'},
                    { type: 'textbox', label: 'Pod Name', binding: 'pod_name'}
                ],
                buttons: {
                    edit: null,
                    share: null,
                    pdf: null,
                    remove: null,
                    profile: {
                        icon: profIcon,
                        text: 'Profile'
                    }
                }
            },  
            mouseScrool: OrgChart.none,
            enableSearch: false,
            template:"olivia",
            nodeBinding: {
                field_0: "company",
                field_1: "name",
                field_2: "id",
                field_3: "slack_tag",
                field_4: "oncall",
                img_0: "img",
                img_1: "company_pic"
            },
            tags: {
                "Department": {
                    template: "department"
                },
                "Staff": {
                    template: "staff"
                },
                "Staff_OnCall": {
                    template: "staff_oncall"
                }
            },
            nodes:props.nodes
        });
        chart.editUI.on('button-click', function (sender, args) {
            var data = chart.get(args.nodeId);
            if (args.name == 'profile' && (data.tags[0]=='Staff' || data.tags[0]=='Staff_OnCall')) {
                window.open('/profile/'+data.id,"_self");
            }
        });
    });
    return (<div id="orgTree" ref={divRef} />);
}

export default MyProfile;