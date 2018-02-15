#include <stdio.h>
#include <intrin.h>

int main()
{
    bool avxSupported = false;

    #if (_MSC_FULL_VER >= 160040219)
    int cpuInfo[4];
    __cpuid(cpuInfo, 1);

    bool osUsesXSAVE_XRSTORE =  cpuInfo[2] & (1 << 27) || false;
    bool cpuAVXSupport = cpuInfo[2] & (1 << 28) || false;
    if (osUsesXSAVE_XRSTORE && cpuAVXSupport)
    {
        unsigned long long xcrFeaturesMask = _xgetbv(_XCR_XFEATURE_ENABLED_MASK);
        avxSupported = (xcrFeaturesMask & 0x06) || false;
    }
    #endif

    if (avxSupported)
    {
        printf("AVX is Supported");
    }else
    {
        printf("AVX is not Supported");
    }

    return 0;
}