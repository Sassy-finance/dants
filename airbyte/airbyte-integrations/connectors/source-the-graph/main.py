#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#


import sys

from airbyte_cdk.entrypoint import launch
from source_the_graph import SourceTheGraph

if __name__ == "__main__":
    source = SourceTheGraph()
    launch(source, sys.argv[1:])
