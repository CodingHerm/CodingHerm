//Program to calculate the average
#include <iostream>
#include <windows.h>
#include <iomanip>
using namespace std;

int main(){

    //system (CLS) clears everything previously in the terminal
    system("CLS");

    float grade, totalgrade, counter, endgrades;
    grade = 0;
    totalgrade = 0;
    counter = 0;
    endgrades = 0;

    while (endgrades < 1 ) {
    cout << "\tEnter 0 to end\n\n";
    Sleep (1000);
    cout << "\tEnter the grade: ";
    cin >> grade;
    totalgrade = totalgrade + grade;
    counter = counter + 1;
    endgrades = endgrades + 1;
    }

    while (grade > -1) {
    cout << "\tEnter the grade: ";
    cin >> grade;
    if (grade > -1) {
    totalgrade = totalgrade + grade;
    counter = counter + 1;
        }
    }

    //setprecision(4) is rounding, but instead of just rounding numbers beyond the decimal point, it is rounding all numbers and 4 just tells it when to stop
    if (totalgrade / counter > 10)
    cout << "\t\t" << setprecision(4) << (totalgrade)/counter << "%"<<endl; 
    //You need to include else for grades values that that are lower then ten to round to the nearest hundreth again.
    else 
    cout << "\t\t" << setprecision(3) << (totalgrade)/counter << "%" << endl;
    
    return 0;
}