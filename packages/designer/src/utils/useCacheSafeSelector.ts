import { useSelector } from 'react-redux';
import { RootState } from '@/models/store';
import { OutputParametricSelector } from "reselect";
import { useMemo } from 'react';

interface useCacheSafeSelector {
    <P,R1,R2,R3,R4,R5,R6,R7,T>(
        selector:OutputParametricSelector<
        RootState,
        P,
        T,
        (
            ret1:R1,
            ret2:R2,
            ret3:R3,
            ret4:R4,
            ret5:R5,
            ret6:R6,
            ret7:R7,
        )=>T
        >,
        props:any
    ):T;
}

export const useCacheSafeSelector: useCacheSafeSelector = (selector,props) =>{
    const memorizeSelector = useMemo(()=>selector,[])
    return useSelector((state: RootState) => memorizeSelector(state,props))
}