$(document).ready(function () {
    
    var professional_click = false;
    var academic_click = false;
    var personal_click = false;

    $("#professional-projects" ).click(function() {
        if (!professional_click) {
            professional_click = true;
            $( "#professional-projects" ).append(" \
                <div>\
                <div class= "projectsContainer">
                    <div class="projectsBody">
                        <div>
                            <h2> OLS and Naive Bayes Classifier, 2020 - 2021 </h2> 
                            <div class="projectElement">
                                this is a python script I'm writing in order to classify and sentiment predict tweets <br> 
                                this is part of a larger research project with the ISR @ UMich. <br>
                                this project aims to analyze behavioral changes after climate change events, and the script will make our data analysis more
                                <u> <a href="https://www.linkedin.com/in/aditi-khare-71b093199/"> more info here </a> </u> <br>
                                <br>
                                tools used: python (sklearn, numPy) <br>
                            <br>
                            </div>
                        </div>
                        
                        <br>
                        <br>
                        
                        <div>
                            <h2> Human Rights Org Database Website, 2021</h2>
                            <div class="projectElement">
                                beginning to work on back-end for a website to make historical human rights data publically accessible. <br>
                                this is part of a larger research project with the ISR @ UMich.
                            <br>
                        </div>

                        <br>
                        <br>
                    </div>
            </div>
                </div> \
             ");
        } else {
            professional_click = false;
            $( "#professionalBody" ).remove();
        }
    });

    $("#academic-projects" ).click(function() {
        if (!academic_click) {
            academic_click = true;
            $( "#academic-projects" ).append("\
                <div>\
                </div> \
            ");
        } else {
            academic_click = false;
            $( "#academicBody" ).remove();
        }
    });

    $("#personal-projects" ).click(function() {
       if (!personal_click) {
        personal_click = true;
        $( "#personal-projects" ).append(" \
            <div>\
            </div> \
        ");
       } else {
            personal_click = false;
            $( "#personalBody" ).remove();
       }
    });
});
