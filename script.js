var cppCode = {
  'code-grade': String.raw`
#include <iostream>
#include <iomanip>
#include <string>
#include <cstdlib>
using namespace std;

void clss(), loadScreen();

class systemGrade{
  public:
    float average;
    int quiz, exam, grade;
    string remarks, final;

    int readScore(string label){
      int score;
      cout << "\n\n\tInput numbers only 0-100\n";
      while(true){
        cout << right << setw(20) << label;
        cin >> score;
        clss();
        if(cin.fail()){
          cout << "\n\n\tInput numbers only!\n";
          cin.clear();
          cin.ignore(1000, '\n');
          continue;
        } else if(score < 0 || score > 100){
          cout << "\n\n\tNumbers only 0-100 only!\n";
          cin.ignore(1000, '\n');
          continue;
        }
        cin.ignore(1000, '\n');
        return score;
      }
    }

    void addInfo(){
      exam = readScore("Exam Score: ");
      quiz = readScore("Quiz Score: ");
      grade = readScore("Grade Score: ");
      average = (exam + quiz + grade) / 3.0;

      if(average >= 90){
        remarks = "Very Good"; final = "passed!";
      } else if(average >= 80){
        remarks = "Good"; final = "passed!";
      } else if(average >= 75){
        remarks = "Bad"; final = "passed!";
      } else {
        remarks = "Need improvements"; final = "failed";
      }
      mainScreen();
    }

    void mainScreen(){
      int mainInput;
      do {
        while(true){
          cout << "\n\n\tMain Screen for Grading System\n\n";
          cout << right << setw(11) << " (1)" << " View Details\n"
               << right << setw(11) << " (2)" << " Remarks & Status\n"
               << right << setw(11) << " (3)" << " Add Information Again\n"
               << right << setw(11) << " (4)" << " End Program\n\n"
               << right << setw(18) << "Enter: ";
          cin >> mainInput;
          clss();
          if(cin.fail()){
            cout << "\n\n\tInput numbers only!";
            cin.clear();
            cin.ignore(1000, '\n');
            continue;
          }
          cin.ignore(1000, '\n');
          break;
        }

        switch(mainInput){
          case 1: detailScreen(); break;
          case 2: remarkScreen(); break;
          case 3: addInfo(); break;
          case 4:
            cout << "\n\n\tThank you for using me!\n\n";
            exit(0);
          default:
            cout << "\n\n\tInvalid Input. Try again";
        }
      } while(mainInput != 4);
    }

    void detailScreen(){
      cout << "\n\n\tAdded Information Result"
           << "\n\n\tExam: " << exam
           << "\n\tQuiz: " << quiz
           << "\n\tGrade: " << grade
           << "\n\tAverage: " << average;
      loadScreen();
    }

    void remarkScreen(){
      cout << "\n\n\tRemarks: " << remarks
           << "\n\tStatus: You " << final;
      loadScreen();
    }
};

int main(){
  systemGrade tm;
  tm.addInfo();
  return 0;
}

void clss(){ system("cls"); }

void loadScreen(){
  cout << "\n\n\tPress anything to proceed: ";
  cin.ignore(1000, '\n');
  clss();
}
`,
  'code-order': String.raw`
#include <iostream>
#include <string>
#include <cstdlib>
using namespace std;

void clss(), collect();

class marke{
  public:
    float totPri;
    int burgSto, chickSto, steakSto, spagSto;

    marke(){
      totPri = 0;
      burgSto = chickSto = steakSto = spagSto = 5;
    }

    void addToCart(int &sto, int price, string meal){
      int manyInput;
      if(sto == 0){
        cout << "Sorry, we're out of " << meal << "...\n";
        return;
      }
      while(true){
        cout << "\n\n\tHow many?: ";
        cin >> manyInput;
        if(cin.fail() || manyInput < 1){
          cin.clear();
          cin.ignore(1000, '\n');
          cout << "Enter a valid number.";
          continue;
        }
        if(manyInput <= sto) break;
        cout << "Sorry, we only have " << sto << " servings";
      }
      sto -= manyInput;
      totPri += manyInput * price;
      cout << "Your cart is now: " << totPri << "\n\n";
    }

    void ordMenu(){
      int ordInput;
      float cashInput;

      do {
        cout << "(1) Burger Meal - 88\n"
             << "(2) Chicken Rice Meal - 99\n"
             << "(3) Burger Steak Meal - 99\n"
             << "(4) Spaghetti Meal - 95\n"
             << "(5) Check Out\n"
             << "Enter: ";
        cin >> ordInput;
        clss();
        if(cin.fail()){
          cin.clear();
          cin.ignore(1000, '\n');
          ordInput = 0;
        }

        switch(ordInput){
          case 1: addToCart(burgSto, 88, "Burger Meal"); break;
          case 2: addToCart(chickSto, 99, "Chicken Rice Meal"); break;
          case 3: addToCart(steakSto, 99, "Burger Steak Meal"); break;
          case 4: addToCart(spagSto, 95, "Spaghetti Meal"); break;
          case 5:
            while(true){
              cout << "Your total price is: " << totPri
                   << "\n\ncash payment only\n\nInput Cash: ";
              cin >> cashInput;
              if(cashInput > totPri){
                cout << "Your change is: " << cashInput - totPri;
                break;
              } else if(cashInput == totPri){
                cout << "You're now paid";
                break;
              }
              cout << "Your cash is not enough!\n";
            }
            cout << "\nThank you, come again!\n";
            break;
          default:
            cout << "Invalid Input!\n";
        }
      } while(ordInput != 5);
    }
};

int main(){
  collect();
  return 0;
}

void collect(){
  marke marke;
  string usInput;

  do {
    cout << "do you want to make an order?\n"
         << "(a) Start ordering\n"
         << "(x) End program\n"
         << "enter: ";
    getline(cin, usInput);
    clss();

    if(usInput == "a" || usInput == "A"){
      marke.ordMenu();
    } else if(usInput == "x" || usInput == "X"){
      exit(0);
    } else {
      cout << "invalid input\n";
    }
  } while(usInput != "x" && usInput != "X");
}

void clss(){ system("cls"); }
`
};

Object.keys(cppCode).forEach(function (id) {
  var pane = document.getElementById(id);
  if (pane) pane.textContent = cppCode[id].trim();
});

var cards = document.querySelectorAll('.cpp-card');

cards.forEach(function (card) {
  card.addEventListener('click', function () {
    var viewer = document.getElementById(card.dataset.target);
    var wasOpen = viewer.classList.contains('open');

    document.querySelectorAll('.viewer').forEach(function (v) { v.classList.remove('open'); });
    cards.forEach(function (c) {
      c.classList.remove('active');
      c.setAttribute('aria-expanded', 'false');
    });

    if (!wasOpen) {
      viewer.classList.add('open');
      card.classList.add('active');
      card.setAttribute('aria-expanded', 'true');
      setTimeout(function () {
        viewer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 300);
    }
  });
});
