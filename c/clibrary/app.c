#include <stdio.h>
#include "mean.h"

int main(int argc, char* argv[])
{
    double n,m,p;
    n = 9.6;
    m = 11.8;

    p = mean(n,m);

    printf("The Mean of %3.2f and %3.2f is %3.2f \n", m, n, p);
    return 0;
}