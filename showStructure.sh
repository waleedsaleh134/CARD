#!/bin/bash

# Function to display directory structure
function show_structure() {
    local dir=${1:-.}
    local prefix=${2:-}

    for entry in "$dir"/*; do
        echo "$prefix|-- $(basename "$entry")"
        if [ -d "$entry" ]; then
            show_structure "$entry" "$prefix|   "
        fi
    done
}

show_structure
