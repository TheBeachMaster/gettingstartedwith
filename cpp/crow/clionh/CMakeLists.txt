cmake_minimum_required(VERSION 2.8)
project (chat)
set(CMAKE_CXX_STANDARD 11)
set(BOOST_ROOT "/mnt/c/boost")
set(BOOST_INCLUDE_DIR "${Boost_ROOT}/include/boost-1_65_1")
message("BOOST_INCLUDE_DIR:" ${BOOST_INCLUDE_DIR})
set(BOOST_USE_STATIC_LIBS OFF) 
set(BOOST_USE_MULTITHREADED ON)  
set(BOOST_USE_STATIC_RUNTIME OFF)
INCLUDE_DIRECTORIES(${BOOST_INCLUDE_DIR})
LINK_DIRECTORIES(${BOOST_LIBRARY_DIRS})
add_definitions(-DBOOST_ALL_NO_LIB)
set(SOURCE_FILES chat.html main.cpp crow_all.h)
link_libraries(pthread)
link_libraries(boost_system)
add_executable(chat main.cpp)
target_link_libraries(chat ${BOOST_LIBRARIES})
target_link_libraries(chat ${CMAKE_THREAD_LIBS_INIT})
add_custom_command(OUTPUT chat.html
	COMMAND ${CMAKE_COMMAND} -E
	copy ${PROJECT_SOURCE_DIR}/chat.html ${CMAKE_CURRENT_BINARY_DIR}/chat.html
	DEPENDS ${PROJECT_SOURCE_DIR}/chat.html 
)
add_custom_target(chat_copy ALL DEPENDS chat.html)