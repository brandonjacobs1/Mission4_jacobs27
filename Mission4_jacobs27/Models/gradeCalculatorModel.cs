﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_jacobs27.Models
{
    public class gradeCalculatorModel
    {
        [Required]
        [Range(0, 100)]
        public float Assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public float GroupProject { get; set; }
        [Required]
        [Range(0, 100)]
        public float Quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public float MidtermExam { get; set; }
        [Required]
        [Range(0, 100)]
        public float FinalExam { get; set; }
        [Required]
        [Range(0, 100)]
        public float Intex { get; set; }
    }
}
