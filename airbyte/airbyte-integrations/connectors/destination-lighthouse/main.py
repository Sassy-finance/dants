#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#


import sys

from destination_lighthouse import DestinationLighthouse

if __name__ == "__main__":
    DestinationLighthouse().run(sys.argv[1:])
