cmake_minimum_required(VERSION 3.10)
project(create-data-mod VERSION 1.0)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -static-libstdc++")
add_subdirectory(genieutils EXCLUDE_FROM_ALL)
include_directories(
        "genieutils/include"
        "."
	"jsoncpp/include"
)
add_executable(
    create-data-mod
    create-data-mod.cpp
    configure_civilizations.cpp
)
set_property(TARGET create-data-mod PROPERTY CXX_STANDARD 17)
target_link_libraries(create-data-mod genieutils jsoncpp)
