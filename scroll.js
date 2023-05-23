let body = document.querySelector('.body');
let section = 1; 
document.getElementById("about_me").classList.add("animate");
document.getElementById("about_me_h2").classList.add("animate");
document.getElementById("about_me_p").classList.add("animate");
document.getElementById("about_me_p_2").classList.add("animate");
document.getElementById("compass").classList.remove("sec_1_AC");
document.getElementById("compass").classList.add("sec_1_AC");

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.onkeydown = beforeScroll;

function beforeScroll(e) {
    if (e.type == 'wheel') {
        if (e.deltaY < 0) {
            scrollUp();
        } else {
            scrollDown();
        }
    } else if (e.type == 'keydown' && (e.key == 'ArrowDown' || e.key == 'ArrowUp')) {
        if (e.key == 'ArrowDown')
            scrollDown();
        else if (e.key == 'ArrowUp')
            scrollUp();
    }

    e.preventDefault();
    return;
}

function manage_classes(remove_list, remove_len, add_list, add_len) {
    for (i = 0; i < remove_len; i++) {
        document.getElementById(remove_list[i][0]).classList.remove(remove_list[i][1]);
    }
    for (i = 0; i < add_len; i++) {
        document.getElementById(add_list[i][0]).classList.add(add_list[i][1]);
    }
}

let rl_1 = [["about_me", "animate"],["compass", "sec_1_C"],["compass", "sec_1_AC"],["about_me_h2", "animate"],["about_me_p", "animate"],["about_me_p_2", "animate"]];
let rl_1_len = 6;
let rl_2 = [["education", "animate"],["compass", "sec_2_C"],["compass", "sec_2_AC"],["UW_logo", "animate"],["DPS_logo", "animate"]];
let rl_2_len = 5;
let rl_3 = [["projects", "animate"],["compass", "sec_3_C"],["compass", "sec_3_AC"],["Minesweeper", "animate"],["CB_Game", "animate"],["Site", "animate"]];
let rl_3_len = 6;
let rl_4 = [["experience", "animate"],["compass", "sec_4_C"],["compass", "sec_4_AC"],["SC_logo", "animate"]];
let rl_4_len = 4;
let rl_5 = [["achievements", "animate"],["compass", "sec_5_C"],["compass", "sec_5_AC"],["JEE_logo", "animate"],["KVPY_logo", "animate"],["CSMC_logo", "animate"]];
let rl_5_len = 6;
let rl_6 = [["contact_me", "animate"],["compass", "sec_6_C"],["compass", "sec_6_AC"],["profile", "animate"],["email", "animate"],["github", "animate"],["linkedin", "animate"]];
let rl_6_len = 7;

let al_1_c = [["about_me", "animate"],["compass", "sec_1_C"],["about_me_h2", "animate"],["about_me_p", "animate"],["about_me_p_2", "animate"]];
let al_1_len = 5;
let al_2_c = [["education", "animate"],["compass", "sec_2_C"],["UW_logo", "animate"],["DPS_logo", "animate"]];
let al_2_len = 4;
let al_3_c = [["projects", "animate"],["compass", "sec_3_C"],["Minesweeper", "animate"],["CB_Game", "animate"],["Site", "animate"]];
let al_3_len = 5;
let al_4_c = [["experience", "animate"],["compass", "sec_4_C"],["SC_logo", "animate"]];
let al_4_len = 3;
let al_5_c = [["achievements", "animate"],["compass", "sec_5_C"],["JEE_logo", "animate"],["KVPY_logo", "animate"],["CSMC_logo", "animate"]];
let al_5_len = 5;
let al_6_c = [["contact_me", "animate"],["compass", "sec_6_C"],["profile", "animate"],["email", "animate"],["github", "animate"],["linkedin", "animate"]];
let al_6_len = 6;

let al_1_ac = [["about_me", "animate"],["compass", "sec_1_AC"],["about_me_h2", "animate"],["about_me_p", "animate"],["about_me_p_2", "animate"]];
let al_2_ac = [["education", "animate"],["compass", "sec_2_AC"],["UW_logo", "animate"],["DPS_logo", "animate"]];
let al_3_ac = [["projects", "animate"],["compass", "sec_3_AC"],["Minesweeper", "animate"],["CB_Game", "animate"],["Site", "animate"]];
let al_4_ac = [["experience", "animate"],["compass", "sec_4_AC"],["SC_logo", "animate"]];
let al_5_ac = [["achievements", "animate"],["compass", "sec_5_AC"],["JEE_logo", "animate"],["KVPY_logo", "animate"],["CSMC_logo", "animate"]];
let al_6_ac = [["contact_me", "animate"],["compass", "sec_6_AC"],["profile", "animate"],["email", "animate"],["github", "animate"],["linkedin", "animate"]];

function scrollUp() {
    switch (section) {
        case 1:
            section = 6
            document.getElementById('contact_me').scrollIntoView();
            manage_classes(rl_1,rl_1_len,al_6_c,al_6_len);
            break;
        case 2:
            section = 1
            document.getElementById('about_me').scrollIntoView();
            manage_classes(rl_2,rl_2_len,al_1_c,al_1_len);
            break;
        case 3:
            section = 2
            document.getElementById('education').scrollIntoView();
            manage_classes(rl_3,rl_3_len,al_2_c,al_2_len);
            break;
        case 4:
            section = 3
            document.getElementById('projects').scrollIntoView();
            manage_classes(rl_4,rl_4_len,al_3_c,al_3_len);
            break;
        case 5:
            section = 4
            document.getElementById('experience').scrollIntoView();
            manage_classes(rl_5,rl_5_len,al_4_c,al_4_len);
            break;
        case 6:
            section = 5
            document.getElementById('achievements').scrollIntoView();
            manage_classes(rl_6,rl_6_len,al_5_c,al_5_len);
            break;
    }
}

function scrollDown() {
    switch (section) {
        case 1:
            section = 2
            document.getElementById('education').scrollIntoView();
            manage_classes(rl_1,rl_1_len,al_2_ac,al_2_len);
            break;
        case 2:
            section = 3
            document.getElementById('projects').scrollIntoView();
            manage_classes(rl_2,rl_2_len,al_3_ac,al_3_len);
            break;
        case 3:
            section = 4
            document.getElementById('experience').scrollIntoView();
            manage_classes(rl_3,rl_3_len,al_4_ac,al_4_len);
            break;
        case 4:
            section = 5
            document.getElementById('achievements').scrollIntoView();
            manage_classes(rl_4,rl_4_len,al_5_ac,al_5_len);
            break;
        case 5:
            section = 6
            document.getElementById('contact_me').scrollIntoView();
            manage_classes(rl_5,rl_5_len,al_6_ac,al_6_len);
            break;
        case 6:
            section = 1
            document.getElementById('about_me').scrollIntoView();
            manage_classes(rl_6,rl_6_len,al_1_ac,al_1_len);
            break;
    }
}

let currentSlideUw = "UW_logo";
let nextSlideUw = "UW_basic_info";
function cycleThroughUw() {
    document.getElementById(currentSlideUw).style.display = "none";
    document.getElementById(nextSlideUw).style.display = "block";
    if (currentSlideUw == "UW_logo") {
        currentSlideUw = "UW_basic_info"
        nextSlideUw = "UW_GPA"
    } else if (currentSlideUw == "UW_basic_info") {
        currentSlideUw = "UW_GPA"
        nextSlideUw = "UW_Courses"
    } else if (currentSlideUw == "UW_GPA") {
        currentSlideUw = "UW_Courses"
        nextSlideUw = "UW_Awards"
    } else if (currentSlideUw == "UW_Courses") {
        currentSlideUw = "UW_Awards"
        nextSlideUw = "UW_logo"
    } else if (currentSlideUw == "UW_Awards") {
        currentSlideUw = "UW_logo"
        nextSlideUw = "UW_basic_info"
    }
}

let currentSlideDps = "DPS_logo";
let nextSlideDps = "DPS_basic_info";
function cycleThroughDps() {
    document.getElementById(currentSlideDps).style.display = "none";
    document.getElementById(nextSlideDps).style.display = "block";
    if (currentSlideDps == "DPS_logo") {
        currentSlideDps = "DPS_basic_info"
        nextSlideDps = "DPS_GPA"
    } else if (currentSlideDps == "DPS_basic_info") {
        currentSlideDps = "DPS_GPA"
        nextSlideDps = "DPS_Awards"
    } else if (currentSlideDps == "DPS_GPA") {
        currentSlideDps = "DPS_Awards"
        nextSlideDps = "DPS_logo"
    } else if (currentSlideDps == "DPS_Awards") {
        currentSlideDps = "DPS_logo"
        nextSlideDps = "DPS_basic_info"
    }
}

let currentSlideSc = "SC_logo";
let nextSlideSc = "SC_Basic_Info";
function cycleThroughSc() {
    document.getElementById(currentSlideSc).style.display = "none";
    document.getElementById(nextSlideSc).style.display = "block";
    if (currentSlideSc == "SC_logo") {
        currentSlideSc = "SC_Basic_Info"
        nextSlideSc = "SC_Responsibilities"
    } else if (currentSlideSc == "SC_Basic_Info") {
        currentSlideSc = "SC_Responsibilities"
        nextSlideSc = "SC_Responsibilities_2"
    } else if (currentSlideSc == "SC_Responsibilities") {
        currentSlideSc = "SC_Responsibilities_2"
        nextSlideSc = "SC_logo"
    } else if (currentSlideSc == "SC_Responsibilities_2") {
        currentSlideSc = "SC_logo"
        nextSlideSc = "SC_Basic_Info"
    }
}

let currentSlideJee = "JEE_logo";
let nextSlideJee = "JEE_Summary";
function cycleThroughJee() {
    document.getElementById(currentSlideJee).style.display = "none";
    document.getElementById(nextSlideJee).style.display = "block";
    if (currentSlideJee == "JEE_logo") {
        currentSlideJee = "JEE_Summary"
        nextSlideJee = "JEE_logo"
    } else if (currentSlideJee == "JEE_Summary") {
        currentSlideJee = "JEE_logo"
        nextSlideJee = "JEE_Summary"
    }
}

let currentSlideKvpy = "KVPY_logo";
let nextSlideKvpy = "KVPY_Summary";
function cycleThroughKvpy() {
    document.getElementById(currentSlideKvpy).style.display = "none";
    document.getElementById(nextSlideKvpy).style.display = "block";
    if (currentSlideKvpy == "KVPY_logo") {
        currentSlideKvpy = "KVPY_Summary"
        nextSlideKvpy = "KVPY_logo"
    } else if (currentSlideKvpy == "KVPY_Summary") {
        currentSlideKvpy = "KVPY_logo"
        nextSlideKvpy = "KVPY_Summary"
    }
}

let currentSlideCsmc = "CSMC_logo";
let nextSlideCsmc = "CSMC_Summary";
function cycleThroughCsmc() {
    document.getElementById(currentSlideCsmc).style.display = "none";
    document.getElementById(nextSlideCsmc).style.display = "block";
    if (currentSlideCsmc == "CSMC_logo") {
        currentSlideCsmc = "CSMC_Summary"
        nextSlideCsmc = "CSMC_logo"
    } else if (currentSlideCsmc == "CSMC_Summary") {
        currentSlideCsmc = "CSMC_logo"
        nextSlideCsmc = "CSMC_Summary"
    }
}