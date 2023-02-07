using Microsoft.AspNetCore.Mvc;
using Mission4_jacobs27.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_jacobs27.Controllers
{
    public class BrandonController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult gradeCalculator() 
        {
            return View();
        }
        [HttpPost]
        public IActionResult gradeCalculator(gradeCalculatorModel model)
        {
            return View();
        }
    }
}
