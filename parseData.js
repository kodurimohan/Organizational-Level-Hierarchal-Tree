import getPerson from "./getPerson";
// import data from "./Maindata";
function ParseData(data) {
    if (data!=null) {
        var parent_connect = {};
        for (let i=0;i<data.length;i++) {
            var person = getPerson(data[i]);
            if (person.pid in parent_connect) {
                parent_connect[person.pid].push(person);   
            } else {
                parent_connect[person.pid] = [person];
            }
        }
        
        var parents = Object.keys(parent_connect);

        for (let i=0;i<parents.length;i++) {
            var persons = parent_connect[parents[i]];
            var pod_div = {};
            for (let j=0;j<persons.length;j++) {
                if (persons[j].pod_name in pod_div) {
                    pod_div[persons[j].pod_name].push(persons[j]);
                } else {
                    pod_div[persons[j].pod_name] = [persons[j]];
                }
            }
            parent_connect[parents[i]] = pod_div;
        }
        var finalParsed = [];

        for (let i=0;i<parents.length;i++) {
            var parent = parents[i]
            var pods = Object.keys(parent_connect[parent])
            for (let j=0;j<pods.length;j++) {
                var pod = pods[j]
                var pod_persons = parent_connect[parent][pod]
                // if (pod_persons.length==1) {
                //     finalParsed.push(pod_persons[0])
                // } else {
                    //creating a pod
                    var pod_block = {};
                    pod_block.id = pod+"_"+parent;
                    pod_block.pid = pod_persons[0].pid;
                    pod_block.tags = ["Department"];
                    pod_block.name = pod;
                    pod_block.seniority = 0;
                    finalParsed.push(pod_block)
                    for (let k = 0;k<parent_connect[parent][pod].length;k++) {
                        var new_per = parent_connect[parent][pod][k];
                        new_per.pid = pod_block.id;
                        finalParsed.push(new_per);
                    }
                // }
            }
        }
        finalParsed.sort((p1,p2) => (p1.seniority > p2.seniority ? 1 : -1));
        return finalParsed;
    }
    return null;
}

export default ParseData;