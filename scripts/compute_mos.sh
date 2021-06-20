MAPPINGS=(R-N-G G-N-R N-G-R G-R-N N-R-G)
	
I=0
while [[ $I -lt 5 ]]
do
	((C=I+1))
	cat survey.txt | egrep -v -e "^\t$" | awk -v c=$C '{print $c}' | sed -e 's/None/O/' > ${I}.txt

	CUR_MAPPING=( $(echo ${MAPPINGS[$I]} | sed -e 's/-/ /g') )
	K=0
	for KEY in A B C
	do
		VAL=${CUR_MAPPING[K]}
		echo sed -e 's/'$KEY'/'$VAL'/' ${I}.txt > ${I}_.txt
		sed -e 's/'$KEY'/'$VAL'/' ${I}.txt > ${I}_.txt
		mv ${I}_.txt ${I}.txt
		((K=K+1))
	done
		
	((I=I+1))
done

R_COUNT=$(cat [0-4].txt | grep R | wc -l)
G_COUNT=$(cat [0-4].txt | grep G | wc -l)
N_COUNT=$(cat [0-4].txt | grep N | wc -l)
O_COUNT=$(cat [0-4].txt | grep O | wc -l)

TOTAL_COUNT=$(echo "$R_COUNT + $G_COUNT + $N_COUNT + $O_COUNT" | bc)

R_PERCENT=$(echo "100 * $R_COUNT / $TOTAL_COUNT" | bc)
G_PERCENT=$(echo "100 * $G_COUNT / $TOTAL_COUNT" | bc)
N_PERCENT=$(echo "100 * $N_COUNT / $TOTAL_COUNT" | bc)
O_PERCENT=$(echo "100 * $O_COUNT / $TOTAL_COUNT" | bc)

echo "R: " $R_COUNT " : " ${R_PERCENT}"%"
echo "G: " $G_COUNT " : " ${G_PERCENT}"%"
echo "N: " $N_COUNT " : " ${N_PERCENT}"%"
echo "O: " $O_COUNT " : " ${O_PERCENT}"%"
