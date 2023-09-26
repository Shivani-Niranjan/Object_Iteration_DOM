function data_func(){
    event.preventDefault();

    var name = document.getElementById("name-input").value;
    var company = document.getElementById("company-input").value;

    var numbers = document.getElementById("number-input").value;
    let num_string = numbers.split(',');

    var bio = document.getElementById("bio-input").value;
    var bio_string = bio.split(',');

    let bio_elements = {};
    for (let i of bio_string){
        var e = i.split(':');
        // console.log(e);
        if((typeof e[0]) !== "undefined"){
            // console.log(typeof e[0])
            // console.log(e[1])

        bio_elements[e[0]] = e[1];
        console.log(bio_elements);
        }
    }

    let obj = {};
    obj.obj_name = name;
    obj.obj_company = company;
    obj.obj_numbers = num_string;
    obj.obj_bio = bio_elements;

    // console.log(obj.obj_company)
    // console.log(obj.bio_elements)
    console.log("success")
}

// bio = "1:2,3:4,5:6";
// var bio_string = bio.split(',')
// let bio_elements = {};
// for (let i of bio_string){
//         e = i.split(':');
//         bio_elements.e[0] = e[1];
// }
// console.log(bio_elements)


