
$("#gradeCalc").click(function () {
   //Get user input
    const assignmentGrade = $("#assignment").val()
    const groupProjectGrade = $('#groupProject').val()
    const quizGrade = $('#quiz').val()
    const midtermGrade = $('#mExam').val()
    const finalExamGrade = $('#fExam').val()
    const intexGrade = $('#intex').val()
    //Grade weights
    const assignmentWeight = 0.5
    const quizWeight = 0.1
    const groupProjectWeight = 0.1
    const midtermWeght = 0.1
    const finalWeight = 0.1
    const intex = 0.1
    //calculate final grade
    const finalGrade = (assignmentGrade * assignmentWeight) + (groupProjectGrade * groupProjectWeight)
        + (quizGrade * quizWeight) + (midtermGrade * midtermWeght) + (finalExamGrade * finalWeight) + (intex * intexGrade)
    //assign letter grade
    let finalLetterGrade
    if (finalGrade >= 94) { finalLetterGrade = 'A' }
    else if (finalGrade >= 90) { finalLetterGrade = 'A-' }
    else if (finalGrade >= 87) { finalLetterGrade = 'B+' }
    else if (finalGrade >= 84) { finalLetterGrade = 'B' }
    else if (finalGrade >= 80) { finalLetterGrade = 'B-' }
    else if (finalGrade >= 77) { finalLetterGrade = 'C+' }
    else if (finalGrade >= 74) { finalLetterGrade = 'C' }
    else if (finalGrade >= 70) { finalLetterGrade = 'C-' }
    else if (finalGrade >= 67) { finalLetterGrade = 'D+' }
    else if (finalGrade >= 64) { finalLetterGrade = 'D' }
    else if (finalGrade >= 60) { finalLetterGrade = 'D-' }
    else { finalLetterGrade = 'E' }

    document.getElementById("finalLetterGrade").innerHTML = finalLetterGrade
})