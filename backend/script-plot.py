import os
import pandas as pd
import matplotlib
import matplotlib.pyplot as plt

import tarfile
try:
    file = tarfile.open('./inputs/file.tar.gz')
    file.extractall('./inputs')
    file.close()
    csv_files = os.listdir('inputs')
    li = []

    for filename in csv_files:
        if ('.csv' in filename):
            fields_name = filename.split('-')
            df = pd.read_csv('./inputs/'+filename, index_col=None, header=0)
            li.append(df)


    frame = pd.concat(li, axis=0, ignore_index=True)
    plt.bar(frame["protocol"], frame["amountUSD"])
    plt.savefig('./outputs/output.png')


except Exception as e:
    print(e)
