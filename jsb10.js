let profile = {
    name : "Ronaldo",
    yob : 1985,
    nationality : "Bồ đào Nha",
}
alert('Thông tin cầu thủ:');
alert(`Tên cầu thủ: ${profile.name} --- Năm sinh : ${profile.yob} --- Quốc tịch : ${profile.nationality}`)
let newtt = prompt("Bạn có muốn nhập thêm thông tin cầu thủ không: Y or N")
if(newtt == "N"){
    alert("Good Bye!")
}
else if (newtt == "Y"){
    let ttnew = prompt("thông tin bạn muốn thêm là:")
    profile["newif"] = ttnew,
    alert(`Tên cầu thủ: ${profile.name} --- Năm sinh : ${profile.yob} --- Quốc tịch : ${profile.nationality} --- thông tin mới : ${profile.ttnew} `)
}
